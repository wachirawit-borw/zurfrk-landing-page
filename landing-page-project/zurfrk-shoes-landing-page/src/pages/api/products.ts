import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { getServerSession } from "next-auth/next"
import { authOptions } from '@/pages/api/nextauth' // ตรวจสอบว่า path ถูกต้อง

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // --- กรณีที่ 1: ผู้ชมทั่วไปขอดูข้อมูล (Public GET Request) ---
    if (req.method === 'GET') {
      const products = await prisma.product.findMany();
      return res.status(200).json(products);
    }

    // --- กรณีที่ 2: Admin ต้องการจะสร้าง, แก้ไข, หรือลบข้อมูล (Protected Requests) ---
    // ด่านตรวจความปลอดภัยจะทำงาน "เฉพาะ" ใน block นี้เท่านั้น
    if (req.method === 'POST' || req.method === 'PUT' || req.method === 'DELETE') {
      const session = await getServerSession(req, res, authOptions);
      if (!session || session.user?.role !== 'ADMIN') {
        return res.status(401).json({ error: 'Unauthorized. Requires admin privileges.' });
      }

      // เมื่อผ่านด่านตรวจแล้ว ค่อยมาดูว่าจะทำอะไรต่อ
      if (req.method === 'POST') {
        const { name, price, imageUrl, description, stock } = req.body;
        if (!name || !price || !imageUrl) {
          return res.status(400).json({ error: 'Missing required fields' });
        }
        const newProduct = await prisma.product.create({
          data: { name, price, imageUrl, description, stock: stock || 0 },
        });
        return res.status(201).json(newProduct);
      }
      
      if (req.method === 'PUT') {
        const { id, ...data } = req.body;
        if (!id) return res.status(400).json({ error: 'Missing product ID' });
        const updatedProduct = await prisma.product.update({ where: { id: Number(id) }, data });
        return res.status(200).json(updatedProduct);
      }
      
      if (req.method === 'DELETE') {
        const { id } = req.body;
        if (!id) return res.status(400).json({ error: 'Missing product ID' });
        await prisma.product.delete({ where: { id: Number(id) } });
        return res.status(204).end();
      }
    }
    
    // --- กรณีอื่นๆ ที่ไม่รองรับ ---
    res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);

  } catch (error) {
    console.error("Error in /api/products:", error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
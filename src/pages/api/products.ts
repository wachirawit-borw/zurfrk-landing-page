import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/pages/api/nextauth'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    /* ────────── READ ────────── */
    if (req.method === 'GET') {
      const products = await prisma.product.findMany({
        orderBy: { createdAt: 'desc' }
      })
      return res.status(200).json({ products })
    }

    /* ────────── WRITE (ADMIN) ────────── */
    const session = await getServerSession(req, res, authOptions)
    if (!session || session.user?.role !== 'ADMIN') {
      return res.status(401).json({ error: 'Unauthorized. Requires admin privileges.' })
    }

    if (req.method === 'POST') {
      const { name, price, imageUrl, description, stock = 0 } = req.body
      if (!name || !price || !imageUrl) {
        return res.status(400).json({ error: 'Missing required fields' })
      }
      const newProduct = await prisma.product.create({
        data: { name, price, imageUrl, description, stock },
      })
      return res.status(201).json(newProduct)
    }

    if (req.method === 'PUT') {
      const { id, ...data } = req.body
      if (!id) return res.status(400).json({ error: 'Missing product ID' })
      const updated = await prisma.product.update({
        where: { id: Number(id) },
        data,
      })
      return res.status(200).json(updated)
    }

    if (req.method === 'DELETE') {
      const { id } = req.body
      if (!id) return res.status(400).json({ error: 'Missing product ID' })
      await prisma.product.delete({ where: { id: Number(id) } })
      return res.status(204).end()
    }

    res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  } catch (error) {
    console.error('Error in /api/products:', error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}

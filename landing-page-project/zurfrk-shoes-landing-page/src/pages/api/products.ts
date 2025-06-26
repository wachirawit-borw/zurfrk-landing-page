import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      const products = await prisma.product.findMany()
      return res.status(200).json(products)

    } else if (req.method === 'POST') {
      const { name, price, imageUrl, description, stock } = req.body

      if (!name || !price || !imageUrl) {
        return res.status(400).json({ error: 'Missing required fields' })
      }

      const newProduct = await prisma.product.create({
        data: {
          name,
          price,
          imageUrl,
          description,
          stock: stock || 0,
        },
      })

      return res.status(201).json(newProduct)

    } else if (req.method === 'PUT') {
      const { id, ...data } = req.body
      if (!id) return res.status(400).json({ error: 'Missing product ID' })

      const updatedProduct = await prisma.product.update({
        where: { id },
        data,
      })

      return res.status(200).json(updatedProduct)

    } else if (req.method === 'DELETE') {
      const { id } = req.body
      if (!id) return res.status(400).json({ error: 'Missing product ID' })

      await prisma.product.delete({
        where: { id },
      })

      return res.status(204).end()
    } else {
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
      return res.status(405).end(`Method ${req.method} Not Allowed`)
    }
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}

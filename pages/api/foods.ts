import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../lib/prisma'

type postProps = {
  name: string;
  desc: string;
  isGluten: boolean;
  price: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    try {
      if (req.method === 'POST') {
        const post: postProps = JSON.parse(req.body);
      try {
        const data = await prisma.food.create({
          data: {
            name: post.name,
            desc: post.desc,
            isGluten: post.isGluten,
            price: post.price,
          },
        })
        res.status(200).json(data); 
      } catch (error) {
        res.status(500).json({ error });
      }
    } else if (req.method === 'DELETE'){
      const deleteId = Number(req.query.id);
      try {
        const data = await prisma.food.delete({
          where: {
            id: deleteId,
          },
        })
        res.status(200).json(data); 
      } catch (error) {
        res.status(500).json({ error });
      }
    } else if (req.method === 'GET') {
      try {
        const result = await prisma.food.findMany();
        res.status(200).json(result);
        return result;
      } catch (error) {
        res.status(500).json({ error });
      }
    }
  } catch (error) {
    res.status(500).json({ error });
  }
}
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../lib/prisma'

type postProps = {
  name: string;
  desc: string;
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
        const data = await prisma.drink.create({
          data: {
            name: post.name,
            desc: post.desc,
            price: post.price,
          },
        })
        res.status(200).json(data); 
      } catch (error) {
        res.status(500).json({ error });
      }
    } else if (req.method === 'DELETE') {
        const deleteId = Number(req.query.id);
      try {
        const data = await prisma.drink.delete({
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
        const result = await prisma.drink.findMany();
        res.status(200).json(result);
      } catch (error) {
        res.status(500).json({ error });
      }
    }
  } catch (error) {
    res.status(500).json('Something went wrong!');
  }
}
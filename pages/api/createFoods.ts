import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

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
      const post: postProps = JSON.parse(req.body);
      if (req.method === 'POST') {
      try {
        const data = await prisma.food.create({
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
    }
  } catch (error) {
    res.status(500).json({ error });
  }
}
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../lib/prisma'

type postProps = {
  customer: string;
  foodId: number;
  drinkId: number;
  sidesId: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    try {
      if (req.method === 'POST') {
        const post: postProps = JSON.parse(req.body);
      try {
        const data = await prisma.order.create({
          data: {
            customer: post.customer,
            foodId: post.foodId,
            drinkId: post.drinkId,
            sidesId: post.sidesId,
          },
        })
        res.status(200).json(data); 
      } catch (error) {
        res.status(500).json({ error });
      }
    } 
  } catch (error) {
    res.status(500).json('Something went wrong!');
  }
}
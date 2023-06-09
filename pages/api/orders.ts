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
    }  else if (req.method === 'GET') {
    try {
      const result = await prisma.order.findMany();
      res.status(200).json(result);
      return result;
    } catch (error) {
      res.status(500).json({ error });
    }
  } else if (req.method === 'DELETE') {
    try {
      const deleteId = Number(req.query.id);
      const result = await prisma.order.delete({
        where: {
          id: deleteId,
        },
      });
      res.status(200).json(result);
      return result;
    } catch (error) {
      res.status(500).json({ error });
    }
  }
  } catch (error) {
    res.status(500).json('Something went wrong!');
  }
}
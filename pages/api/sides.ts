import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../lib/prisma'

type requestProps = {
  name: string;
  desc: string;
  isVegan: boolean;
  price: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    try {
      if (req.method === 'POST') {
        const post: requestProps = JSON.parse(req.body);
      try {
        const data = await prisma.sides.create({
          data: {
            name: post.name,
            desc: post.desc,
            isVegan: post.isVegan,
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
        const data = await prisma.sides.delete({
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
        const result = await prisma.sides.findMany();
        res.status(200).json(result);
        return result;
      } catch (error) {
        res.status(500).json({ error });
      }
    } else if (req.method === 'PUT') {
        const updateId = Number(req.query.id);
        const put: requestProps = JSON.parse(req.body);
        try {
          const data = await prisma.sides.update({
            where: {
              id: updateId,
            },
            data: {
              name: put.name,
              desc: put.desc,
              isVegan: put.isVegan,
              price: put.price,
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
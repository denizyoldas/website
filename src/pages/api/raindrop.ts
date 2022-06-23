// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ name: string }>
) {
  console.log(req.body);
  res.send({ name: 'world' });
}

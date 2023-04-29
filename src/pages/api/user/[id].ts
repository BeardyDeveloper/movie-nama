import type { NextApiRequest, NextApiResponse } from 'next';
import { ResponseProps } from '../Interfaces';
import { usersList } from '@/mocks/mockUsersList';

export default function userHandler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseProps>,
) {
  const { query } = req;
  const id = query['id'] as string;

  try {
    const user = usersList.find(u => u.id === id);

    if (!user) {
      res.status(404).send({
        hasError: true,
        message: 'User not found',
        statusCode: 404,
      });
    } else {
      res.status(200).json({
        hasError: false,
        message: 'Successful',
        payload: {
          user: user,
        },
        statusCode: 200,
      });
    }
  } catch (err) {
    res.status(500).json({
      hasError: true,
      message: 'failed to load data',
      statusCode: 500,
    });
  }
}

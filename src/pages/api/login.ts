import type { NextApiRequest, NextApiResponse } from 'next';
import { ResponseProps } from './Interfaces';
import { usersList } from '@/mocks/mockUsersList';

const fakeToken = 'f5478asdfasdfasdfasd3214ertjhazcazx64asdashd';

export default function loginHandler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseProps>,
) {
  const { body } = req;
  const { email, password } = body;

  try {
    const user = usersList.find(u => u.email === email);

    if (!user) {
      res.status(404).send({
        hasError: true,
        message: 'User not found',
        statusCode: 404,
      });
    } else {
      if (user.password === password) {
        res.status(200).json({
          hasError: false,
          message: 'Successful',
          payload: {
            user: user!,
            token: fakeToken,
          },
          statusCode: 200,
        });
      } else {
        res.status(401).send({
          hasError: true,
          message: 'Password is wrong',
          statusCode: 401,
        });
      }
    }
  } catch (err) {
    res.status(500).send({
      hasError: true,
      message: 'failed to load data',
      statusCode: 500,
    });
  }
}

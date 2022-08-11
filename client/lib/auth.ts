// Handles authentication by validating route, checking token before we make extra DB queries

import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from './prisma';

// function checks token, validates user, then it will call handler or it will display 404
export const validateRoute = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    //get access to token, destructed from cookie and renamed it
    const { TRAX_ACCESS_TOKEN: token } = req.cookies;
    if (token) {
      // get user from token
      let user;
      try {
        //verify token
        const { id } = jwt.verify(token, 'hello');
        user = await prisma.user.findUnique({
          where: { id },
        });
        if (!user) {
          throw new Error('Invalid Credentials');
        }
      } catch (error) {
        res.status(401);
        res.json({ error: 'Not Authorized' });
        return;
      }
      // if all works out then this will happen,
      // once we get user,we pass it along inside the handler
      return handler(req, res, user);
    }
    //if no token then this will happen
    res.status(401);
    res.json({ error: 'Not Authorized' });
  };
};

export const validateToken = (token) => {
  const user = jwt.verify(token, 'hello');
  return user;
};

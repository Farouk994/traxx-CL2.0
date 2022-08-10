import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie"; // will be used to track with auth
import prisma from "../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const salt = bcrypt.genSaltSync();
  const { email, password } = req.body;

  let user;

  try {
    // attempting to make a user from the prisma instance
    user = await prisma.user.create({
      data: {
        email,
        password: bcrypt.hashSync(password, salt),
      },
    });
  } catch (error) {
    // If it fails then send an error back and stop 'return'
    res.status(401);
    res.json({ error: "User Already Exists" });
    return;
  }

  // if above try/catch succeeds then we create a token with
  // user object/time it was token was created plus password and when the
  // token will expire
  const token = jwt.sign(
    {
      email: user.email,
      id: user.id,
      tim: Date.now(),
    },
    "hello",
    { expiresIn: "8h" }
  );

  // Take the created token then serialize in a cookie called T_A_T and we give it properties
  // like how it will be accessed, expiry, path it works on which is root, secure only in production
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("TRAX_ACCESS_TOKEN", token, {
      httpOnly: true,
      maxAge: 8 * 60 * 60,
      path: "/",
      sameSize: "lax",
      secure: process.env.NODE_ENV === "production",
    })
  );

  res.json(user);
};

// ## STEP PROCESS ##
// - User makes a request to the sign Up page

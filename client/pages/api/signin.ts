import prisma from "../../lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        time: Date.now(),
      },
      "hello",
      {
        expiresIn: "8hrs",
      }
    );
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("TRAX_ACCESS_TOKEN", token, {
        httpOnly: true, // only access cookie via http
        maxAge: 8 * 60 * 60, // how long the cookie is valid
        path: "/", // where / on what site / who has access
        sameSize: "lax",
        secure: process.env.NODE_ENV === "production", // should be encrypted in prod
      })
    );
    res.json(user);
  } else {
    res.status(401);
    res.json({ error: "Invalid Credentials" });
  }
};

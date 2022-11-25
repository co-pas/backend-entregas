import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayLoad {
  sub: string;
}

export default async function ensureAuthenticateClient(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      status: "error",
      message: "token missing.",
    });
  }

  // Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
  // [0] - Bearer
  // [1] - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(
      token,
      "87e752b1e04515f6bb896ec2c49afbdf"
    ) as IPayLoad;

    request.id_client = sub;

    return next();
  } catch (error) {
    return response.status(401).json({
      status: "error",
      message: "invalid token.",
    });
  }
}

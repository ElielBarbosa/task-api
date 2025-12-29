import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface TokenPayload {
  userId: number,
  login: string,
  iat: number,
  exp: number
}

export const authenticateUser = (req: Request, res: Response, next: NextFunction) => {

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Token não informado" });
  }
  const parts = authHeader.split(" ");

  const [type, token] = parts;

  const secret = process.env.JWT_SECRET as string;

  try {
    const decoded = jwt.verify(token, secret) as TokenPayload;

    (req as any).userId = decoded.userId;

    console.log(decoded);

    return next()


  } catch (error) {
    return res.status(401).json({ message: "Token invalido ou expirado." });
  }
}
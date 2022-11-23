import prisma from "../../../database/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

interface IAuthenticateClient {
  username: string;
  password: string;
}

export default class AuthenticateClient {
  // Receber username, password.
  public async execute({ username, password }: IAuthenticateClient) {
    // Verificar se username esta cadastrado.
    const client = await prisma.clients.findFirst({
      where: {
        username: username,
      },
    });
    if (!client) {
      throw new Error("Username or password invalid.");
    }

    // Verificar se senha corresponde ao username.
    const passwordMatch = await compare(password, client.password);

    if (!passwordMatch) {
      throw new Error("Username or password invalid.");
    }

    // Gerar o Token.
    const token = sign({ username }, "60ca5fde6075046983e0faa3dda076ca", {
      subject: client.id,
      expiresIn: "1d",
    });

    return token;
  }
}

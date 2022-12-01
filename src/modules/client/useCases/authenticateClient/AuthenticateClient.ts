import prisma from "../../../../database/prismaClient";
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
    const client = await prisma.clients.findUnique({
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
    // Hash String: "Brasilia"
    const token = sign({ username }, "87e752b1e04515f6bb896ec2c49afbdf", {
      subject: client.id,
      expiresIn: "1d",
    });

    return token;
  }
}

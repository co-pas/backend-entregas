import prisma from "../../../../database/prismaClient";
import { hash } from "bcrypt";

interface ICreateClient {
  username: string;
  password: string;
}

export class CreateClientUseCase {
  public async execute({ username, password }: ICreateClient) {
    // Validar se o cliente existe:
    const clientExist = await prisma.clients.findFirst({
      where: {
        username: {
          mode: "insensitive",
        },
      },
    });

    // Caso exista um cliente, desparar um erro:
    if (clientExist) {
      throw new Error("Client already exists.");
    }

    // Criptografar a senha:
    const hashPassword = await hash(password, 10);

    const client = await prisma.clients.create({
      data: {
        username: username,
        password: hashPassword,
      },
    });

    return client;
  }
}

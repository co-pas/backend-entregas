import prisma from "../../../../database/prismaClient";
import { hash } from "bcrypt";

interface ICreateClient {
  username: string;
  password: string;
}

export default class CreateClient {
  public async execute({ username, password }: ICreateClient) {
    // Validar se o client existe:
    const clientExist = await prisma.clients.findUnique({
      where: {
        username: username,
      },
    });

    // Caso exista um client, desparar um erro:
    if (clientExist) {
      throw new Error("Client already exists.");
    }

    // Criptografar a senha:
    const hashPassword = await hash(password, 10);

    // Salvar o client.
    const client = await prisma.clients.create({
      data: {
        username: username,
        password: hashPassword,
      },
    });

    return client;
  }
}

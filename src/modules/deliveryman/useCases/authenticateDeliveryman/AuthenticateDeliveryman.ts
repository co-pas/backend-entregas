import prisma from "../../../../database/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

interface IAuthenticateDeliveryman {
  username: string;
  password: string;
}

export default class AuthenticateDeliveryman {
  // Receber username, password.
  public async execute({ username, password }: IAuthenticateDeliveryman) {
    // Verificar se username esta cadastrado.
    const deliveryman = await prisma.deliverymans.findUnique({
      where: {
        username: username,
      },
    });

    if (!deliveryman) {
      throw new Error("Username or password invalid.");
    }

    // Verificar se senha corresponde ao username.
    const passwordMatch = await compare(password, deliveryman.password);

    if (!passwordMatch) {
      throw new Error("Username or password invalid.");
    }

    // Gerar o Token.
    // Hash String: "Moscou"
    const token = sign({ username }, "1f5e0d438cd21ead1304540910f483ad", {
      subject: deliveryman.id,
      expiresIn: "1d",
    });

    return token;
  }
}

import prisma from "../../../../database/prismaClient";
import { hash } from "bcrypt";

interface ICreateDeliveryman {
  username: string;
  password: string;
}

export default class CreateDeliveryman {
  public async execute({ username, password }: ICreateDeliveryman) {
    // Validar se o deliveryman existe:
    const deliverymanExist = await prisma.deliverymans.findUnique({
      where: {
        username: username,
      },
    });

    // Caso exista um deliveryman, disparar um erro:
    if (deliverymanExist) {
      throw new Error("Deliveryman already exists.");
    }

    // Criptografar a senha:
    const hashPassword = await hash(password, 10);

    // Salvar o deliveryman
    const deliveryman = await prisma.deliverymans.create({
      data: {
        username: username,
        password: hashPassword,
      },
    });

    return deliveryman;
  }
}

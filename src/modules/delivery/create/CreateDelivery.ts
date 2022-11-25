import prisma from "../../../database/prismaClient";

interface ICreateDelivery {
  item_name: string;
  id_client: string;
}

export default class CreateDelivery {
  public async execute({ item_name, id_client }: ICreateDelivery) {
    // Validar se o id_client é valido.
    const verifyIdClient = await prisma.clients.findUnique({
      where: {
        id: id_client,
      },
    });

    // Caso não exista um cliente com esse id_client disprar o erro:
    if (!verifyIdClient) {
      throw new Error("Client not exists.");
    }

    const delivery = await prisma.deliveries.create({
      data: {
        item_name: item_name,
        id_client: id_client,
      },
    });

    return delivery;
  }
}

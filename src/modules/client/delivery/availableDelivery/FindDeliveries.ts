import prisma from "../../../../database/prismaClient";

export default class FindDeliveries {
  public async execute(id_client: string) {
    const delivery = await prisma.clients.findMany({
      where: {
        id: id_client,
      },
      select: {
        deliveries: true,
        id: true,
        username: true,
      },
    });

    return delivery;
  }
}

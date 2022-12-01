import prisma from "../../../../database/prismaClient";

export default class FindDeliveries {
  public async execute(id_client: string) {
    const delivery = await prisma.deliveries.findMany({
      where: {
        id_client: id_client,
      },
    });

    return delivery;
  }
}

import prisma from "../../../../../database/prismaClient";

export default class FindDeliveries {
  public async execute(id_deliveryman: string) {
    const deliveries = await prisma.deliverymans.findMany({
      where: {
        id: id_deliveryman,
      },
      select: {
        deliveries: true,
        id: true,
        username: true,
      },
    });

    return deliveries;
  }
}

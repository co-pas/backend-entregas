import prisma from "../../../database/prismaClient";

export default class GetDeliveries {
  public async execute() {
    const deliveries = await prisma.deliveries.findMany({
      where: {
        end_at: null,
      },
    });

    return deliveries;
  }
}

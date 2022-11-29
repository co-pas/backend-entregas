import prisma from "../../../database/prismaClient";

export default class AvailableDelivery {
  public async execute() {
    const deliveries = await prisma.deliveries.findMany({
      where: {
        end_at: null,
      },
    });

    return deliveries;
  }
}
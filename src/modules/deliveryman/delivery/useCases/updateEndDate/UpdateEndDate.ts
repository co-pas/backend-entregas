import prisma from "../../../../../database/prismaClient";

interface IUpdateEndDate {
  id_delivery: string;
  id_deliveryman: string;
}

export default class UpdateEndDate {
  public async execute({ id_delivery, id_deliveryman }: IUpdateEndDate) {
    const updatedDelivery = await prisma.deliveries.updateMany({
      where: {
        id: id_delivery,
        id_deliveryman: id_deliveryman,
      },
      data: {
        end_at: new Date(),
      },
    });

    return updatedDelivery;
  }
}

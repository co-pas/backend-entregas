import prisma from "../../../../database/prismaClient";

interface ICreateDelivery {
  item_name: string;
  id_client: string;
}

export default class CreateDelivery {
  public async execute({ item_name, id_client }: ICreateDelivery) {
    const delivery = await prisma.deliveries.create({
      data: {
        item_name: item_name,
        id_client: id_client,
      },
    });

    return delivery;
  }
}

import prisma from "../../../../../database/prismaClient";

export default class FindRequests {
  public async execute(id_client: string) {
    const requests = await prisma.clients.findMany({
      where: {
        id: id_client,
      },
      select: {
        deliveries: true,
        id: true,
        username: true,
      },
    });

    return requests;
  }
}

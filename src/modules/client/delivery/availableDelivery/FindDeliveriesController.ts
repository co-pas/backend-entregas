import { Request, Response } from "express";
import FindDeliveries from "./FindDeliveries";

export default class FindDeliveriesController {
  public async handle(request: Request, response: Response) {
    const { id_client } = request;

    const findDeliveries = new FindDeliveries();

    const result = await findDeliveries.execute(id_client);

    return response.json(result);
  }
}

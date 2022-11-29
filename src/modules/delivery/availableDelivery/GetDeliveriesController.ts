import { Request, Response } from "express";
import GetDeliveries from "./GetDeliveries";

export default class GetDeliveriesController {
  public async handle(request: Request, response: Response) {
    const getDeliveries = new GetDeliveries();

    const deliveries = await getDeliveries.execute();

    return response.json(deliveries);
  }
}

import { Request, Response } from "express";
import FindDeliveries from "./FindDeliveries";

export default class FindDeliveriesController {
  public async handle(request: Request, response: Response) {
    const { id_deliveryman } = request;

    const findDeliveries = new FindDeliveries();

    const result = await findDeliveries.execute(id_deliveryman);

    return response.json(result);
  }
}

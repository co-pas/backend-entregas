import { Request, Response } from "express";
import AvailableDelivery from "./AvailableDeliveries";

export default class AvailableDeliveriesController {
  public async handle(request: Request, response: Response) {
    const availableDelivery = new AvailableDelivery();

    const result = await availableDelivery.execute();

    return response.json(result);
  }
}

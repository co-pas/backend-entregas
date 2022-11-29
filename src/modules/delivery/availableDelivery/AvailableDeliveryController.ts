import { Request, Response } from "express";
import AvailableDelivery from "./AvailableDelivery";

export default class AvailableDeliveryController {
  public async handle(request: Request, response: Response) {
    const availableDelivery = new AvailableDelivery();

    const result = await availableDelivery.execute();

    return response.json(result);
  }
}

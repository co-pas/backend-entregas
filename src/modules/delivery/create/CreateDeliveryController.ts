import { Request, Response } from "express";
import CreateDelivery from "./CreateDelivery";

export default class CreateDeliveryController {
  public async handle(request: Request, response: Response) {
    const { item_name, id_client } = request.body;

    const createDelivery = new CreateDelivery();

    const result = await createDelivery.execute({
      item_name,
      id_client,
    });

    return response.json(result);
  }
}

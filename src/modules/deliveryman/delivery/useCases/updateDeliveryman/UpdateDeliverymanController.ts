import { Request, Response } from "express";
import UpdateDeliveryman from "./UpdateDeliveryman";

export default class UpdateDeliverymanController {
  public async handle(request: Request, response: Response) {
    const { id_deliveryman } = request;
    const { id: id_delivery } = request.params;

    const updateDelivery = new UpdateDeliveryman();

    const result = await updateDelivery.execute({
      id_delivery,
      id_deliveryman,
    });

    return response.json(result);
  }
}

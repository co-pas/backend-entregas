import { Request, Response } from "express";
import UpdateEndDate from "./UpdateEndDate";

export default class UpdateEndDateController {
  public async handle(request: Request, response: Response) {
    const { id_deliveryman } = request;
    const { id: id_delivery } = request.params;

    const updateEndDate = new UpdateEndDate();

    const result = await updateEndDate.execute({
      id_delivery,
      id_deliveryman,
    });

    return response.json(result);
  }
}

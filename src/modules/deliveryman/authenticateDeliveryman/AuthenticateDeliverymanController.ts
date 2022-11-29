import { Request, Response } from "express";
import AuthenticateDeliveryman from "./AuthenticateDeliveryman";

export default class AuthenticateDeliverymanController {
  public async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const authenticateDeliveryman = new AuthenticateDeliveryman();

    const result = await authenticateDeliveryman.execute({
      username,
      password,
    });

    return response.json(result);
  }
}

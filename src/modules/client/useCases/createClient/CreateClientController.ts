import { Request, Response } from "express";
import CreateClient from "./CreateClient";

export default class CreateClientController {
  public async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const createClient = new CreateClient();

    const result = await createClient.execute({
      username,
      password,
    });

    return response.json(result);
  }
}

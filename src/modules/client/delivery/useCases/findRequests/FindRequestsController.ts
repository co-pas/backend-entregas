import { Request, Response } from "express";
import FindRequests from "./FindRequests";

export default class FindRequestsController {
  public async handle(request: Request, response: Response) {
    const { id_client } = request;

    const findRequests = new FindRequests();

    const result = await findRequests.execute(id_client);

    return response.json(result);
  }
}

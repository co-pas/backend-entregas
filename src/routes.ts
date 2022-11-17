import { Router } from "express";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";

const routes = Router();
const createClient = new CreateClientController();

routes.post("/client/", createClient.handle);

export default routes;

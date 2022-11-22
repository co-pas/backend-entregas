import { Router } from "express";
import AuthenticateClientController from "./modules/accounts/authenticate/AuthenticateClientController";
import CreateClientController from "./modules/clients/create/CreateClientController";

const routes = Router();

const authenticateClient = new AuthenticateClientController();
const createClient = new CreateClientController();

routes.post("/authenticate", authenticateClient.handle);

routes.post("/client/", createClient.handle);

export default routes;

import { Router } from "express";
import AuthenticateClientController from "./modules/account/authenticate/AuthenticateClientController";
import CreateClientController from "./modules/client/create/CreateClientController";
import CreateDeliverymanController from "./modules/deliveryman/create/CreateDeliverymanController";

const routes = Router();

const authenticateClient = new AuthenticateClientController();
const createClient = new CreateClientController();
const createDeliveryman = new CreateDeliverymanController();

routes.post("/authenticate", authenticateClient.handle);

routes.post("/client", createClient.handle);
routes.post("/deliveryman", createDeliveryman.handle);

export default routes;

import { Router } from "express";

import AuthenticateClientController from "./modules/account/authenticateClient/AuthenticateClientController";
import CreateClientController from "./modules/client/create/CreateClientController";

import CreateDeliverymanController from "./modules/deliveryman/create/CreateDeliverymanController";
import AuthenticateDeliverymanController from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";

import CreateDeliveryController from "./modules/delivery/create/CreateDeliveryController";

const routes = Router();

// Client Controllers:
const createClient = new CreateClientController();
const authenticateClient = new AuthenticateClientController();

// Deliveryman Controllers:
const createDeliveryman = new CreateDeliverymanController();
const authenticateDeliveryman = new AuthenticateDeliverymanController();

// Delivery Controllers:
const createDelivery = new CreateDeliveryController();

// Client Routes:
routes.post("/client", createClient.handle);
routes.post("/client/authenticate", authenticateClient.handle);

// Deliveryman Routes:
routes.post("/deliveryman", createDeliveryman.handle);
routes.post("/deliveryman/authenticate", authenticateDeliveryman.handle);

// Delivery Routes:
routes.post("/delivery", createDelivery.handle);

export default routes;

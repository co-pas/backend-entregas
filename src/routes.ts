import { Router } from "express";

import AuthenticateClientController from "./modules/client/authenticateClient/AuthenticateClientController";
import CreateClientController from "./modules/client/createClient/CreateClientController";

import CreateDeliverymanController from "./modules/deliveryman/createDeliveryman/CreateDeliverymanController";
import AuthenticateDeliverymanController from "./modules/deliveryman/authenticateDeliveryman/AuthenticateDeliverymanController";

import CreateDeliveryController from "./modules/delivery/createDelivery/CreateDeliveryController";
import AvailableDeliveryController from "./modules/delivery/availableDelivery/AvailableDeliveryController";

import ensureAuthenticateClient from "./middlewares/ensureAuthenticateClient";
import ensureAuthenticateDeliveryman from "./middlewares/ensureAuthenticateDeliveryman";
import UpdateDeliverymanController from "./modules/delivery/updateDeliveryman/UpdateDeliverymanController";

const routes = Router();

// Client Controllers:
const createClient = new CreateClientController();
const authenticateClient = new AuthenticateClientController();

// Deliveryman Controllers:
const createDeliveryman = new CreateDeliverymanController();
const authenticateDeliveryman = new AuthenticateDeliverymanController();

// Delivery Controllers:
const createDelivery = new CreateDeliveryController();
const availableDelivery = new AvailableDeliveryController();
const updateDeliveryman = new UpdateDeliverymanController();

// Client Routes:
routes.post("/client", createClient.handle);
routes.post("/client/authenticate", authenticateClient.handle);

// Deliveryman Routes:
routes.post("/deliveryman", createDeliveryman.handle);
routes.post("/deliveryman/authenticate", authenticateDeliveryman.handle);

// Delivery Routes:
routes.post("/delivery", ensureAuthenticateClient, createDelivery.handle);

routes.get(
  "/delivery/available",
  ensureAuthenticateDeliveryman,
  availableDelivery.handle
);

routes.put(
  "/delivery/updateDeliveryman/:id",
  ensureAuthenticateDeliveryman,
  updateDeliveryman.handle
);

export default routes;

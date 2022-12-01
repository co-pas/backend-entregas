import { Router } from "express";

import AuthenticateClientController from "./modules/client/useCases/authenticateClient/AuthenticateClientController";
import CreateClientController from "./modules/client/useCases/createClient/CreateClientController";
import FindRequestsController from "./modules/client/delivery/useCases/findRequests/FindRequestsController";

import ensureAuthenticateClient from "./middlewares/ensureAuthenticateClient";
import ensureAuthenticateDeliveryman from "./middlewares/ensureAuthenticateDeliveryman";

import CreateDeliverymanController from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import AuthenticateDeliverymanController from "./modules/deliveryman/useCases/authenticateDeliveryman/AuthenticateDeliverymanController";
import UpdateDeliverymanController from "./modules/deliveryman/delivery/useCases/updateDeliveryman/UpdateDeliverymanController";
import FindDeliveriesController from "./modules/deliveryman/delivery/useCases/findDeliveries/FindDeliveriesController";

import CreateDeliveryController from "./modules/client/delivery/useCases/createDelivery/CreateDeliveryController";
import AvailableDeliveriesController from "./modules/deliveryman/delivery/useCases/availableDeliveries/AvailableDeliveriesController";

const routes = Router();

// Client Controllers:
const createClient = new CreateClientController();
const authenticateClient = new AuthenticateClientController();
const findRequests = new FindRequestsController();
const createDelivery = new CreateDeliveryController();

// Deliveryman Controllers:
const createDeliveryman = new CreateDeliverymanController();
const authenticateDeliveryman = new AuthenticateDeliverymanController();
const availableDeliveries = new AvailableDeliveriesController();
const updateDeliveryman = new UpdateDeliverymanController();
const findDeliveries = new FindDeliveriesController();

// Client Routes:
routes.post("/client", createClient.handle);
routes.post("/client/authenticate", authenticateClient.handle);
routes.get("/client/deliveries", ensureAuthenticateClient, findRequests.handle);

// Delivery Routes:
routes.post("/delivery", ensureAuthenticateClient, createDelivery.handle);
routes.get(
  "/delivery/available",
  ensureAuthenticateDeliveryman,
  availableDeliveries.handle
);
routes.put(
  "/delivery/updateDeliveryman/:id",
  ensureAuthenticateDeliveryman,
  updateDeliveryman.handle
);

// Deliveryman Routes:
routes.post("/deliveryman", createDeliveryman.handle);
routes.post("/deliveryman/authenticate", authenticateDeliveryman.handle);
routes.get(
  "/deliveryman/deliveries",
  ensureAuthenticateDeliveryman,
  findDeliveries.handle
);

export default routes;

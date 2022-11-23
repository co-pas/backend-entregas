import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import routes from "./routes";

import Settings from "./config/settings";

const app = express();

app.use(express.json());
app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof Error) {
      return response.status(400).json({
        status: "error",
        message: error.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "internal server error.",
    });
  }
);

app.listen(Settings.port, Settings.hostname, () => {
  console.log(Settings.startMessage);
});

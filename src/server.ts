import express from "express";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000, "127.0.0.1", () => {
  console.log("Server is started.");
});

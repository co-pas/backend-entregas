import express from "express";
import routes from "./routes";
import Settings from "./config/settings";

const app = express();

app.use(express.json());
app.use(routes);

app.listen(Settings.port, Settings.hostname, () => {
  console.log(Settings.startMessage);
});

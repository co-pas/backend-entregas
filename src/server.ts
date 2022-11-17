import express from "express";

const app = express();

app.listen(3000, "127.0.0.1", () => {
  console.log("Server is started.");
});

import express from "express";
var app = express();
import Router from "./route.js";
import BodyParser from "body-parser";
import dbLoader from "./mongo.js";

app.use(express.json());
app.use(BodyParser.json());
app.use(Router);

app.listen(5000, async (req, res) => {
  await dbLoader();
  console.log("Server Started Running");
});
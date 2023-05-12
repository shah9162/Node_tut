import express from "express";
var app = express();
import Router from "./Route.js";
import BodyParser from "body-parser";
import cors from "cors"

import dbLoader from "./Mongo.js";

app.use(express.json());
app.use(BodyParser.json());
app.use(cors());

app.use(Router);

// app.use((err, req, res, next) => {
//   let message = err.message;
//   if (isCelebrateError(err)) {
//     //console.log(err.details.get('body').message);
//     if (err.details.get("body")) {
//       message = err.details.get("body").message;
//     }
//     if (err.details.get("params")) {
//       message = err.details.get("params").message;
//     }
//     if (err.details.get("query")) {
//       message = err.details.get("query").message;
//     }
//   }
//   res.status(err.status || 200);
//   return res.json({ success: false, result: { error: message } });
//   res.json({
//     errors: {
//       message: message,
//     },
//   });
// });

app.listen(5000, async (req, res) => {
  await dbLoader();
  console.log("Server Started Running");
});
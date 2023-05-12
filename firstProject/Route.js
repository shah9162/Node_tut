import express from "express";
import { celebrate, Joi } from "celebrate";
//import jwt from "Jsonwebtoken";
//import studentmembership from "./schema/studentmembership.js";
//import studentlists from "./schema/studentlist.js";
import jwt from "jsonwebtoken";
import axios from "axios";

var Router = express.Router();
import {
  sum,
  internet,
  read,
  add,
  update,
  deletion,
  added,
  readon,
  updated,
  deleted,
  aggregation,
  exo,
  createentry,
  loginn,
  signinn,
  getrecord,
} from "./service.js";
import studentMembership from "./schema/studentmembership.js";
//import { JsonWebTokenError } from "jsonwebtoken";

// for postman hit
Router.post("/Postman", async (req, res) => {
  sum(req, res);
});

//  for ip with json file

Router.get("/IpJsonLog", async (req, res) => {
  internet(req, res);
});

// for crud operation
Router.post("/create", async (req, res) => {
  add(req, res);
});

Router.get("/read", async (req, res) => {
  read(req, res);
});

Router.put("/update", async (req, res) => {
  update(req, res);
});

Router.delete("/delete", async (req, res) => {
  deletion(req, res);
});

// using celebrate for crud operation
Router.post(
  "/celebratecreate",
  celebrate({
    body: Joi.object().keys({
      id: Joi.number().required(),
      name: Joi.string().required(),
      email: Joi.string().required(),
      membershipDep: Joi.string().required(),
      accountNo: Joi.number().required(),
    }),
  }),
  (req, res) => {
    added(req, res);
  }
);

Router.get(
  "/celebrateread",
  celebrate({
    query: Joi.object().keys({
      id: Joi.number().required(),
    }),
    body: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required(),
      membershipDep: Joi.string().required(),
      accountNo: Joi.number().required(),
    }),
  }),
  (req, res) => {
    readon(req, res);
  }
);

Router.patch(
  "/celebrateupdate",
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required(),
      membershipDep: Joi.string().required(),
      accountNo: Joi.number().required(),
    }),
    query: Joi.object().keys({
      id: Joi.number().required(),
    }),
  }),
  (req, res) => {
    updated(req, res);
  }
);

Router.delete(
  "/celebratedelete",
  celebrate({
    query: {
      id: Joi.number().required(),
    },
  }),
  (req, res) => {
    deleted(req, res);
  }
);

// database aggregation regex

Router.get("/regex", async (req, res) => {
  var search = await studentMembership.find({
    name: { $regex: req.query.data },
  });
  return res.status(200).json({ success: true, message: search });
});

export default Router;

// database aggregation project

Router.post("/aggregate", async (req, res) => {
  aggregation(req, res);
});

// data access through axios

Router.get("/axois", async (req, res) => {
  exo(req, res);
});

// for login sign and record extraction detail
// for data entry in database in a different way
Router.post("/createentry", async (req, res) => {
  createentry(req, res);
});

Router.post("/loginn", async (req, res) => {
  loginn(req, res);
});

Router.post("/signinn", async (req, res) => {
  signinn(req, res);
});

Router.get("/getrecord", async (req, res) => {
  getrecord(req, res);
});

// for token generation to understand in a simple version
Router.post("/generationtoken", async (req, res) => {
  let data = {
    date: Date(),
    id: "1",
  };

  let key = "ferfjhf4j";
  let token = jwt.sign(data, key);
  let a = await token;
  console.log(a);
  return res.json(a);
});

Router.get("/verificationtoken", async (req, res) => {
  let tokenheader =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRlIjoiV2VkIE5vdiAwMiAyMDIyIDExOjMyOjIzIEdNVCswNTMwIChJbmRpYSBTdGFuZGFyZCBUaW1lKSIsImlkIjoiMSIsImlhdCI6MTY2NzM2ODk0M30.WKQzEKMYbVbtBe0iqAAl90idtBrIQTHPgXeDSLdp9Yg";
  let secret_key = "ferfjhf4j";
  let verifytoken = jwt.verify(tokenheader, secret_key);
  if (!verifytoken) {
    return res.json("not match");
  } else {
    return res.json(" match");
  }
});

Router.get("/getother", async (req, res) => {
  let response = await axios("http://vashudevtest.herokuapp.com/");
  return res.json({ success: true, message: response.data });
});
import express from "express";
import  { celebrate, Joi } from 'celebrate';
var Router = express.Router();
import  {Sum,minus,internet,add,read,update,deletion,sendEmail} from "./Service.js";


Router.post("/Postman", async (req, res) => {
  Sum(req, res);
  minus(req, res);
  // internet(req, res);
});


Router.get("/IpJsonLog",async(req,res) =>{
  internet(req, res);
});

// for crud operation
Router.post("/Create", async (req, res) => {
  add(req, res);
});

Router.get("/read", async (req, res) => {
  read(req, res);
});


Router.put("/update", async (req, res) => {
  update(req, res);
});

Router.delete('/delete',async(req,res)=>{
  deletion(req,res);
});

Router.get("/get", async (req, res) => {
  gatData(req, res);
});

// for crud operation

// const customNameValidation = (value, helpers) => {
//   // Add your custom validation logic here
//   if (value.length < 2) {
//     return helpers.error('name.tooShort', { limit: 2 });
//   }
//   // If validation is successful, return the value
//   return value;
// };


Router.post("/celebratecreate",
// celebrate({
//     body: Joi.object().keys({

//       id: Joi.number().required(),
//       name: Joi.string().regex(/^[a-zA-Z]+$/).required(),
//       // email: Joi.string().regex(/^\S+@\S+\.\S+$/).required(),
//       email: Joi.string().lowercase().email().required(),
//       department: Joi.string().regex(/^[a-zA-Z]+$/).required(),
//       age: Joi.number().required(),
//       phone : Joi.string().length(10).pattern(/^[6,7,8,9][0-9]{0,9}$/).required(),
//        }),
//   }),
  async(req, res) => {
    console.log("testing")
    add(req, res);
  }
);

Router.post('/send-email',async(req,res)=>{
  sendEmail(req,res)
});

export default Router;
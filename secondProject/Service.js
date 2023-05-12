// import fs from "fs";
import student from "./schema/studentList.js"
import nodemailer from "nodemailer";
// const nodemailer = require('nodemailer');

import axios from 'axios';

let sum =0;
let Minus=0;
export var Sum = async (req, res) => {
  var a = parseInt(req.body.a);
  var b = parseInt(req.body.b);
  sum = sum+ parseInt(a + b);
  // let minus = await parseInt(a - b);
  // return res.status(200) .json({ success: true, message : {"Addition :" :sum}})

    // .status(200)
    // .json({ success: true, message: { "Addition :": sum } });
};


export var minus = async (req, res) => {
  var a = parseInt(req.body.a);
  var b = parseInt(req.body.b);
  // let sum = await parseInt(a + b);
  Minus =  Minus+parseInt(a - b);
  return res.status(200) .json({ success: true, message : {"subs :" :minus,"Addition :" :sum}})

    // .status(200)
    // .json({ success: true, message: { "Addition :": sum } });
};

export var internet = async (req, res) => {
  var ip = req.socket.remoteAddress;
  //console.log(req.socket.remoteAddress);
  let obj = {
    ip: ip,
  };
  fs.writeFileSync("IpAddress.json", JSON.stringify({ message: obj }), {
    flag: "a+",
  });
  return res.status(200).json({ success: true, message: obj, });
  // return res.status(200) .json({ success: true, message : {"subs :" :Minus,"Addition :" :sum, obj}})

};


// Create operation
  export const add = async(req, res)=>{
  try{

    // let obj = {
    //  id: req.body.id,
    //  name: req.body.name,
    //  department: req.body.department,
    //  email: req.body.email,
    //  age: req.body.age,
    // };

console.log(req.body)
    let data = await student.create(req.body);
    console.log("guyy",data);
    return res.status(200).json({success: true , massage: data})
  }
   catch(error){
   return res.status(400).json({success: false , massage: error})
  }
}  




export const gatData = async(req,res)=>{
 const abc=  await axios("https://api.binance.com/api/v3/ticker/24hr")
 console.log("res",abc)
   return res.status(200).send(abc)

  //  res.status(200).json({ success: true, message: abc });
     }
      // JSON.stringify({ message: abc })


  // .then(response => {
  //   console.log(response.data);
  // })
  // .catch(error => {
  //   console.log(error);
  // });




//Read operation
export const read = async (req, res) => {
  let obj = {
   id:req.query.id
    // name: req.body.name,
    // department: req.body.department,
    // email: req.body.email,
    // age: req.body.age,
  };

  if(obj.id){
    let data = await student.find(obj);
    return res.status(200).json({ success: true, message: data });
  }
  else{
    let data = await student.find({department: "it"});
    return res.status(200).json({ success: true, message: data });
  }
 };


 //Update Operation
 export const update = async (req, res) => {
  const updatedData = req.body;
  const result='';
  
  try {
    const id = req.query.id;
  
    const options = { new: true };
    //console.log(name, updatedData);
    result=await student.findOneAndUpdate(
      { id: id },
      { $set:  {...updatedData}  },
      options
    );
    return res.status(200).send(`Resource ${result}, ${Object.keys(updatedData)} updated successfully`);
  } catch (error) {
    return res.status(400).send(`Resource ${result} ,${Object.keys(updatedData)} updated not successfully`);
  }
};

//Delete operation
export const deletion = async (req, res) => {
  try {
    const id = req.query.id;
    const response = await student.findOneAndDelete({ id });
    // console.log(response)
    if(response==null){
      return res.status(400).json({ success: false, message: "Error !" });
    }
    else{
      return res.status(200).json({ message: `Id ${id} has  been deleted` });
    }
   
  } catch (error) {
    
  }
};


//send Email API
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: 'roundpay999888@gmail.com', // Your Gmail address
      pass: 'zkqmpqwctasrbnbh' // Your Gmail password
  }
});

export const sendEmail= async(req, res)=>{
  let to = req.body.to;
    let data = req.body.data;

    let mailOptions = {
        from: 'roundpay999888@gmail.com',
        to: to,
        subject: 'New data',
        //  html: '<p>Hello,</p><p>Please see this image:</p><img src="https://koinpro.io/assets/kpImages/white-logo.webp"/>',
        text: JSON.stringify(data),
      };

    // Send the email
    let info = await transporter.sendMail(mailOptions);

    console.log('Message sent: %s', info.messageId);
    res.send('Email sent successfully');

    //zkqmpqwctasrbnbh
}

 










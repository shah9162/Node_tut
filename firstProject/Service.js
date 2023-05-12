import studentList from "./schema/studentlist.js";
import fs from "fs";
import studentMembership from "./schema/studentmembership.js";

export var sum = async (req, res) => {
  var a = parseInt(req.body.a);
  var b = parseInt(req.body.b);
  let sum = await parseInt(a + b);
  return res
    .status(200).json({ success: true, message: { "Addition :": sum } });
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
  return res.status(200).json({ success: true, message: obj });
};

export const add = async (req, res) => {
  try {
    let obj = {
      id: req.body.id,
      name: req.body.name,
      department: req.body.department,
      email: req.body.email,
      age: req.body.age,
    };

    let data = await studentList.create(obj);
    return res.status(200).json({ success: true, message: data });
  } catch (error) {
    return res.status(200).json({ success: false, message: error });
  }
};

export const read = async (req, res) => {
  let obj = {
    id: req.body.id,
    name: req.body.name,
    department: req.body.department,
    email: req.body.email,
    age: req.body.age,
  };
  let data = await studentList.find(obj);
  return res.status(200).json({ success: true, message: data });
};

export const update = async (req, res) => {
  try {
    const id = req.query.id;
    const updatedData = req.body;
    const options = { new: true };
    //console.log(name, updatedData);
    const result = await studentList.findOneAndUpdate(
      { id: id },
      { $set:  {...updatedData}  },
      options
    );
    return res.status(200).json({ success: true, message:  result  });
  } catch (error) {
    return res.status(400).json({ success: false, message: "Error !" });
  }
};

export const deletion = async (req, res) => {
  try {
    const id = req.query.id;
    await studentList.findOneAndDelete({ id });
    return res.status(200).json({ message: `Document ${id} has  been deleted` });
  } catch (error) {
    return res.status(400).json({ success: false, message: "Error !" });
  }
};

export const added = async (req, res) => {
  try {
    let obj = {
      id: req.body.id,
      name: req.body.name,
      email: req.body.email,
      membershipDep: req.body.membershipDep,
      accountNo: req.body.accountNo,
    };

    let data = await studentMembership.create(obj);
    return res.status(200).json({ success: true, message: data });
  } catch (error) {
    return res.status(200).json({ success: false, message: error });
  }
};

export const readon = async (req, res) => {
  try {
    let obj = {
      id: req.body.id,
      name: req.body.name,
      email: req.body.email,
      membershipDep: req.body.membershipDep,
      accountNo: req.body.accountNo,
    };

    let data = await studentMembership.find(obj);
    return res.status(200).json({ success: true, message: data });
  } catch (error) {
    return res.status(200).json({ success: false, message: error });
  }
};
export const updated = async (req, res) => {
  try {
    const id = req.query.id;
    const updatedData = req.body;
    const options = { new: true };
    //console.log(id, updatedData);
    const result = await studentMembership.findOneAndUpdate(
      { id: id },
      { $set: { ...updatedData } },
      options
    );
    // console.log(updatedData);
    return res.status(200).json({ success: true, message: { result } });
  } catch (error) {
    return res.status(400).json({ success: false, message: "Error !" });
  }
};

export const deleted = async (req, res) => {
  try {
    const id = req.query.id;
    await studentMembership.findOneAndDelete({ id });
    res.send(`Document ${id} has  been deleted`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const aggregation = async (req, res) => {
  let obj = await studentMembership.aggregate([
    [
      {
        $lookup: {
          from: "studentlists",
          localField: "email",
          foreignField: "email",
          as: "res",
        },
      },
      {
        $unwind: {
          path: "$res",
          preserveNullAndEmptyArrays: false,
        },
      },
      {
        $project: {
          ID: "$id",
          Name: "$name",
          Email: "$email",
          Department: "$res.department",
          Age: "$res.age",
          MembershipDep: "$membershipDep",
          accountNo: "$accountNo",
        },
      },
    ],
  ]);
  return res.status(200).json(obj);
};

export const exo = async (req, res) => {
  try {
    const response = await axios("https://api.binance.com/api/v3/ticker/24hr", {
      params: {
        symbol: req.query.symbol,
      },
    });
    //res.json(response.data);
    console.log(response.data);
  } catch (error) {
    console.log("hi");
    //res.json({ message: error });
  }
};

export const createentry = async (req, res) => {
  let obj = await studentList.create(req.body);
  return res.json({ success: true, message: obj });
};

export const loginn = async (req, res) => {
  let user = await studentList.findOne({ name: req.body.name });
  if (user?.name) {
    if (user?.department === req.body.department) {
      return res.json({ message: "user exist" });
    } else {
      return res.json({ message: "invalid department" });
    }
  } else {
    return res.json({ message: "invalid name" });
  }
};

export const signinn = async (req, res) => {
  let user = await studentList.findOne({ name: req.body.name });
  if (!user?.name) {
    await studentList.create(req.body);
  } else {
    return res.json("user already exist");
  }
};

export const getrecord = async (req, res) => {
  let obj = await studentList.find({});
  return res.json({ success: true, message: obj });
};
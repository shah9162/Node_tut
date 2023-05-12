const mongodb = require('mongodb');
const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/demo';

mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }).then(()=> {
    console.log('connection successfull')
  }).catch((err) =>{
    console.log('connection not successfull')
  });

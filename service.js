const express = require('express')
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/about', (req, res) => {
//   res.write('400', {'Content-Type': 'text/plain'});

  res.send({
    id: 1,
    name:"rehan",
    email: 'asdf@gmail.com',
    phoneNumber: 90625587411,
    isActive: true
 });
//    res.send('hello world');
});

app.listen(4600,()=>{
    console.log("server start")
});
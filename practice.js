// console.log("hey boy");

const http = require('http');
// http.createServer((req, resp)=>{
//     resp.writeHead(200,{'Content-type':'application/json'});
//     resp.write({name:'shahnawaz',email:'Abc@gmail.com'});
//     resp.end();

// }).listen(4500);

var fs = require('fs');
fs.writeFileSync('input.txt',"Tutorials Point is giving self learning content \n to teach the world in simple and easy way!!!!!");
// fs.appendFileSync('input.txt', "who are you guys");
// var data = fs.readFileSync('input.txt');
// console.log(data.toString());

fs.readFile('input.txt', (err, data)=>{
    if (err){
        return console.error(err);
    } 
   console.log(data.toString());

})
console.log("Program Ended");



const express= require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname,'public');

app.set('view engine', 'ejs');
app.get('',(_,resp)=>{
resp.sendFile(`${publicPath}/index.html`)
});

app.get('/profile',(_,resp)=>{
const user ={
    name:'rehan',
    email:'asdf@gmail.com',
    country: 'india'
}
resp.render('profile',{user})
});

app.listen(8085,()=>{
    console.log("Sever is running on port 8085")
})

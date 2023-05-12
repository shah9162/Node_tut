const reqfilter= require('./middlewareRouter');
const express= require('express');
const app = express();
const route = express.Router();

route.use(reqfilter);

app.get('/' , (req, resp)=>{
resp.send('welkome to home page')
});

app.get('/users',(req, resp)=>{
    resp.send("welkome to users page")
});

route.get('/about',(req, resp)=>{
    resp.send("welkome to about page")
});

app.use('/',route);
app.listen(4800);

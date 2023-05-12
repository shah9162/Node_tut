module.exports= reqfilter = (req, resp,next)=>{
    
    if(!req.query.age){
resp.send("please provide age")
    }
    else if(req.query.age>=10){
resp.send("you can use this website")
    }
    else if(req.query.age<10){
        resp.send("you can not use this website b/c you are under age");
    }
else{
    next();
}
    
};
// app.use(reqfilter);
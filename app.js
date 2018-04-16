const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

var myValue = 0;
var myCode = 0;

app.listen(port,function(){
  console.log("Server is running");
})

app.get("/:value/:code",function(req,res){
    myValue = req.params.value;
    myCode = req.params.code;

    res.redirect("/",myValue,myCode);

})

app.get("/",function(req,res){
  res.send({
    value:myValue,
    code:parseInt(myCode)
  });
})

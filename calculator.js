const express = require("express");

const app = express();

app.get("/", function(req, res){
  res.send("Helo World")
});

app.listen(3000, function(){
  console.log("Server rodando porta 3000");
});

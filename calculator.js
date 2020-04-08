const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res){
  
  res.sendFile(__dirname + "/index.html");

});

app.post("/", function(req, res){

  let num1 = req.body.num1
  let num2 = req.body.num2

  let soma = Number(num1) + Number(num2)

  res.send("O resultado é " + soma)
  
})

app.listen(3000, function(){
  console.log("Server rodando porta 3000");
});

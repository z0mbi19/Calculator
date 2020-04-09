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

app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmicalculator", function(req, res){
  let weight = parseFloat(req.body.num1)
  let height = parseFloat(req.body.num2)

  let imc = weight/(height * height)

  res.send("Your BMI is " + Math.floor(imc))

})

app.listen(3000, function(){
  console.log("Server rodando porta 3000");
});

const express = require("express");
const app = express();
const fs = require("fs");
const content = fs.readFileSync("data.json", "utf8");
const users = JSON.parse(content);
const accountsContent = fs.readFileSync("usersRoles.json", "utf8");
let accounts;
const bodyParser= require('body-parser');

app.get("/api/users", function (req, res) {
  res.setHeader("Content-Type", "image/gif");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send(JSON.stringify(users));
});

app.get("/api/users/employee/:user", function (req, res) {
  users.forEach((element) => {
    if(element.nameEN == req.params.user){
      element.address_book__redesign = true;
      
    }
  })
  filePath = __dirname + '/data.json';
  fs.writeFile(filePath, `${JSON.stringify(users)}`, function(err) {
    if (err) { throw err }
  
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send(JSON.stringify(users));
  })
});

app.get("/api/users/job/:user", function (req, res) {
  console.log(req.params)
  users.forEach((element) => {
    if( element.nameEN == req.params.user){
        element.address_book__redesign = !element.address_book__redesign;
    }  })
    
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  filePath = __dirname + '/data.json';
  fs.writeFile(filePath, `${JSON.stringify(users)}`, function(err) {
    if (err) { throw err }

  res.send(JSON.stringify(users));
  })
});



app.get("/api/user/search/:name", function (req, res) {
  let seacrhResults = [];
  users.forEach((element) => {
    if(element.nameEN == req.params.name){
       seacrhResults.push(element)
    }
  })
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send(JSON.stringify(seacrhResults));
});



app.get("/api/users/search/:item", function (req, res) {
  console.log(req.params)

  let seacrhResults = [];
  users.forEach((element) => {
    console.log(element.nameEN)
    if((element.nameEN.toUpperCase().indexOf(req.params.item.toUpperCase()) >= 0 ) || (element.nameRU.toUpperCase().indexOf(req.params.item.toUpperCase()) >= 0 )){
      seacrhResults.push(element)
    }
  })
  console.log(seacrhResults);
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send(JSON.stringify(seacrhResults));
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));  

app.post("/api/create-account",(req, res)=> {
  let data =[];
    let body = {
      login: req.body.login,
      password: req.body.password,
      role: req.body.role
    }
  if(accountsContent ==''){
    console.log(body);
    data.push(body);
    }
  else {
      accounts = JSON.parse(accountsContent);
      data = accounts;
      console.log(body);
      data.push(body);
    }
  filePath = __dirname + '/usersRoles.json';
  fs.writeFile(filePath, `${JSON.stringify(data)}`, function(err) {
    if (err) { throw err }
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json({message: "File successfully written"})
  })
})

app.get("/api/accounts", (req,res) => {
  accounts = JSON.parse(accountsContent);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send(JSON.stringify(accounts));
})


app.get("/api/accounts/:userName", (req,res) => {
  accounts = JSON.parse(accountsContent);
  let usersWithLogin = [];
  accounts.forEach((element) => {

    if(element.login == req.params.userName){
      console.log(element);
      usersWithLogin.push(element)
    }
  })
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send(JSON.stringify(usersWithLogin));
})

app.get("/api/accounts/:login/:password", (req,res) => {
  accounts = JSON.parse(accountsContent);
  let usersWithInfo = [];
  accounts.forEach((element) => {
    if(element.login == req.params.login && element.password == req.params.password){
      usersWithInfo.push(element)
    }
  })
  console.log(usersWithInfo);
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send(JSON.stringify(usersWithInfo));
})

app.get("/api/accounts/search/:login/:password", function (req, res) {
  let seacrhResults = [];
  users.forEach((element) => {
    if((element.nameEN.toUpperCase().indexOf(req.params.name.toUpperCase()) >= 0 ) || (element.nameRU.toUpperCase().indexOf(req.params.name.toUpperCase()) >= 0 )){
      seacrhResults.push(element)
    }
  })
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send(JSON.stringify(seacrhResults));
});

app.listen(3030, function () {
  console.log("wow");
  
});
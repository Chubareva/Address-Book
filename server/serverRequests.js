const express = require("express");
const app = express();
const fs = require("fs");
const content = fs.readFileSync("./data.json", "utf8");
const bodyParser= require('body-parser');
const { request } = require("http");
let requests = JSON.parse(content);

app.get("/api/requests", function (req, res) {
  
    res.setHeader("Content-Type", "image/gif");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(JSON.stringify(requests));
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));  

app.post("/api/create-request",(req, res)=> {
    let data = [];
    console.log(req.body);
      let body = {
        type: req.body.type,
        start_data: req.body.start_data,
        end_data: req.body.end_data,
        comment: req.body.comment,
        days: req.body.days,
        created: req.body.created,
        id: req.body.id
      }
    if(content ==''){
      data.push(body);
      }
    else {
        requests = JSON.parse(content);
        data = requests;
        data.push(body);
      }
    filePath = __dirname + '/data.json';
    fs.writeFile(filePath, `${JSON.stringify(data)}`, function(err) {
      if (err) { throw err }
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
      res.status(200).json({message: "File successfully written"})
    })

  })

  app.get("/api/delete-request/:id", (req, res)=>{
    let index;
    console.log(req.params);
    requests.forEach(element => {
      if(element.id == req.params.id){
        index = requests.indexOf(element);
        if(index > -1){
          requests.splice(index,1);
        }
      }
      })
    filePath = __dirname + '/data.json';
    fs.writeFile(filePath, `${JSON.stringify(requests)}`, function(err) {
      if (err) { throw err }
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
      res.status(200).json({message: "File successfully written"})
  })
} )

app.post("/api/change-request", (req, res)=>{
  console.log(req.body)
  requests.forEach(element => {
    if(element.id == req.body.id){
      element.start_data = req.body.start_data;
      element.end_data = req.body.end_data;
      element.comment = req.body.comment;
      element.days = req.body.days;
      element.created = req.body.created;
    }
    })
    filePath = __dirname + '/data.json';
    fs.writeFile(filePath, `${JSON.stringify(requests)}`, function(err) {
      if (err) { throw err }
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
      res.status(200).json({message: "File successfully written"})
  })

})

app.listen(3040, function () {
    console.log("wow");
  });


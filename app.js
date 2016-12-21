const express = require("express");
const app = express()

app.get('/', function(req, res){
  res.header("Content-type","text/html");
  res.send("<h1>Hello World!</h1>");
})

app.listen(3000, function() {
  console.log("Listening on port 3000.  Go to http://localhost:3000/");
})

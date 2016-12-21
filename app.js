const express = require("express");
const app = express()

app.get('/', function(req, res){
  res.header("Content-type","text/html");
  res.send("<h1>Hello World!</h1>");
})

app.get('/api/products', (req, res) => {
  let products = [
    {name: "JavaScript Book", price: 9.99},
    {name: "A Christmas Carol", price: 19.99}
  ];
  let stringified = JSON.stringify(products);
  res.send(stringified);
})

app.listen(3000, function() {
  console.log("Listening on port 3000.  Go to http://localhost:3000/");
})

const express = require('express');
const properties = require('./package.json');
const app = express();
const port = 8080;

const aboutController = function(req, res) {
    console.log(req)
    var aboutInfo = {
      name: properties.name,
      description: properties.description,
      version: properties.version,
      request_url: req.url,
      request_header: req.headers,
      request_body: req.body
  }
  res.json(aboutInfo);
}

//Log Request
app.use(function (req,res,next) {
    console.log('/' + req.method);
    next();
  });
  
//Get /nod  
app.get('/', aboutController);


app.listen(port, function () {
  console.log('Example app listening on port 8080!')
})
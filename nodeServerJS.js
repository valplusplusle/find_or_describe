var express = require('express');
var app = express();
app.use(express.bodyParser());

var https = require('https');
var fs = require('fs');

let allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Headers', "*");
  next();
}
app.use(allowCrossDomain);

app.post('/send', function (req, res) {

  var fs = require("fs");
  var counterFileName = 0;
  const dir = './games/';

  fs.readdir(dir, (err, files) => {
    counterFileName = files.length;
    console.log(files.length);
    counterFileName = counterFileName - 1;	  
    console.log(counterFileName);
    
  test = JSON.stringify(req.body);
  console.log(test);      // your JSON
  const fs = require('fs');
  fs.writeFile('./games/' + counterFileName.toString(), test, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
    });  
    counterFileName = counterFileName + 1;
    });
});

app.get('/get', function (req, res) {
  var fs = require("fs");
  var maxNumber = 0;
  const dir = './games/';

  fs.readdir(dir, (err, files) => {
    maxNumber = files.length;
    console.log(files.length);
    maxNumber = maxNumber - 1;	  
    console.log(maxNumber);
  
	
  randomObject = Math.floor(Math.random() * maxNumber); 
  console.log(randomObject);
  fs.readFile('./games/' + randomObject.toString(), function(err, buf) {
	test=JSON.parse(buf.toString());
	res.send(test);
  });
  });
});

https.createServer({
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
}, app)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

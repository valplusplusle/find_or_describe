var app = express();
app.use(express.bodyParser());
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

counterFileName = 0;

app.post('/send', function (req, res) {
  test = JSON.stringify(req.body);
  console.log(test);      // your JSON
  const fs = require('fs');
  fs.writeFile(counterFileName.toString(), test, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
    });
    counterFileName = counterFileName + 1;
});

app.get('/get', function (req, res) {
  randomObject = Math.floor(Math.random() * 5);
  console.log(randomObject);
  var fs = require("fs");
  fs.readFile(randomObject.toString(), function(err, buf) {
        test=JSON.parse(buf.toString());
        res.send(test);
  });
});

https.createServer({
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
}, app)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

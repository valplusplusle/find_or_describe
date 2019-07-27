var express = require('express');
var app = express();
app.use(express.bodyParser());

counterFileName = 0;

app.post('/', function (req, res) {
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

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
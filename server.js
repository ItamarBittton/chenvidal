var app = require('express')();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(require('express').static('client'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/client/view/index.html");
});

var port = process.env.PORT || 8080;

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});


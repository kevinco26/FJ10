
var app = require("express")();
var http = require('http').Server(app);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/Maintenancepage.html');
})

app.get('/FJ_Mascot3.png', function (req, res) {
  res.sendFile(__dirname + '/FJ_Mascot3.png');
})


var port = process.env.PORT || 1337;
http.listen(port);

console.log("Server running at http://localhost:%d", port);
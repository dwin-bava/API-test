var express = require('express'); // requre the express framework
var app = express();
var fs = require('fs'); //require file system object

// Endpoint to Get a list of users
app.get('/nsplist', function(req, res){
    fs.readFile(__dirname + "/" + "nsp.json", 'utf8', function(err, data){
        console.log(data);
        res.end(data); 
    });
})

app.get('/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "nsp.json", 'utf8', function (err, data) {
      var users = JSON.parse( data );
      var user = users["user" + req.params.id] 
      console.log( user );
      res.end( JSON.stringify(user));
   });
})

// Create a server to listen at port 8080
var server = app.listen(9000, function(){
    var host = server.address().address
    var port = server.address().port
    console.log(" API listening at http://%s:%s", host, port)
})

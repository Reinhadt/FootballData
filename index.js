var express = require('express');
var app     = express();
var path    = require('path');

//app.use(express.static(__dirname + '/app'));

/*app.get('/', function(req,res){
    res.sendFile(path.join(__dirname + '/app/index.html'));
});*/

//middleware para access controll allow methods http
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


app.use('/js', express.static(__dirname + '/app/js'));
app.use('/css', express.static(__dirname + '/app/css'));
app.use('/templates', express.static(__dirname + '/app/templates'));

app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('./app/index.html', { root: __dirname });
});

app.listen(3000);
console.log('Magic on 3000');
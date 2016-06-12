var https = require('https');
var express = require('express');
var app = express();
var path = require("path");

var publicPath = path.resolve(__dirname, "views");
app.use(express.static(publicPath));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

var handlebars = require('express-handlebars') 
	.create({ defaultLayout:'main' });

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');




app.get('/', function(req, res){
	res.render('index');
});

app.post('/', function(request, response) {
	console.log("posted!");
	var querystring = require('querystring');
	var data = JSON.stringify({
		"filter": {
			"onlineOnly": true, 
			"page": 1, 
			"quantity": 150
		}, 
		"lat": pos[0],
		"lon": pos[1]
	});

	var options = {
		host: 'primus.grindr.com',
		port: 443,
		path: '/2.0/nearbyProfiles',
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		}
	};

	var req = https.request(options, function(res) {
		console.log('Status: ' + res.statusCode);
		console.log('Headers: ' + JSON.stringify(res.headers));
		res.setEncoding('utf8');
		res.on('data', function (body) {
		console.log('Body: ' + body);
		});
	});

	req.write(data);
	req.end();
});

/* 1.) get current location*/

<<<<<<< HEAD
=======
/*
from: http://www.w3schools.com/html/html5_geolocation.asp
*/

/*
Stretch goal: Make this work lol
function getLocation() {
    if (navigator.geolocation) {
        var pos = navigator.geolocation.getCurrentPosition(showPosition);
        return [pos.coords.latitude, pos.coords.longitude];
    } else {
        return null; //location is not supported
    }
}
>>>>>>> origin/master

var pos = [40.712784, -74.005941];

<<<<<<< HEAD
/* 2.) create JSON request object */
=======
if (pos === null){*/

var pos = [40.712784, -74.005941];


console.log(pos);
/*
2.) create JSON request object */
/*
reference: https://github.com/tomlandia/fuckr/blob/master/unofficial-grindr-api-documentation.md
*/


/*
var req = new XMLHttpRequest();
req.open("POST", "https://primus.grindr.com/2.0/nearbyProfiles");
req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
var res = req.send(reqString);
console.log(res);
*/

/* 3.) send request object and recieve data */


app.listen(4000);
console.log('Started server on port 4000');


















>>>>>>> origin/master




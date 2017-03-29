var https = require('https');
var express = require('express');
var app = express();
var path = require("path");
var geohash = require('latlon-geohash');

var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

var handlebars = require('express-handlebars') 
	.create({ defaultLayout:'main' });

app.engine('handlebars', handlebars.engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

var viewsPublic = path.resolve(__dirname, "views");
app.use(express.static(viewsPublic));

var users = '';
var ids = [];
var userdata = "";
app.get('/', function(req, res){
	console.log("get location!");
	res.render('index');
});

app.post('/', function(req, res){
	console.log(req.body.latitude);
	console.log(req.body.longitude);
	console.log(geohash.encode(req.body.latitude, req.body.longitude));
	res.render('index');
});

/*
app.get('/', function(req, res){
	console.log("eyy!", users);
	res.render('index', {body:users});
	users="";
	//redundant code???
});
app.get('/getgays', function(request, response) {
	console.log("posted!");
	
	var querystring = require('querystring');
	var data = JSON.stringify({
		"filter": {
			"onlineOnly": true, 
			"page": 1, 
			"quantity": 150,
			"photoOnly": false
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
		//console.log(res);
		console.log('Status: ' + res.statusCode);
		console.log('Headers: ' + JSON.stringify(res.headers));
		console.log(geohash.encode(req.body.latitude, req.body.longitude));
		res.setEncoding('utf8');
		res.on('data', function (body) {
			//console.log('Body: ' + body);
			users += body;
		});
		res.on('end', function(body){
			console.log('No more data in response.');
			//users.replace(/\s/g,'');
			jsonUsers = JSON.parse(users);
			for (user in jsonUsers.profiles){
				console.log(jsonUsers.profiles[user].profileId);
				ids.push(user.profileId);
				//here, look up each individual user in their own https request
				//put the data in ids variable
			}
			response.render('index', {body:users});
			users="";
			//redundant code???
		});
	});
	req.write(data);
	req.end(); 
});

app.get('/getLocation', function(request, response){
	console.log("location!");
	response.render('location');
});

/* 1.) get current location*/

/*
from: http://www.w3schools.com/html/html5_geolocation.asp
*/

/*
Stretch goal: Make this work lol
Maybe just make user input coordinates????
function getLocation() {
    if (navigator.geolocation) {
        var pos = navigator.geolocation.getCurrentPosition(showPosition);
        return [pos.coords.latitude, pos.coords.longitude];
    } else {
        return null; //location is not supported
    }
}*/

/* 2.) create JSON request object */


/*
2.) create JSON request object */
/*
reference: https://github.com/tomlandia/fuckr/blob/master/unofficial-grindr-api-documentation.md
*/


/*var req = new XMLHttpRequest();
req.open("POST", "https://primus.grindr.com/2.0/nearbyProfiles");
req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
var res = req.send(reqString);
console.log(res);*/



/* 3.) send request object and recieve data */


app.listen(3000);
console.log('Started server on port 3000');



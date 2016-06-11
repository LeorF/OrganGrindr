/* 1.) get current location*/

/*
from: http://www.w3schools.com/html/html5_geolocation.asp
*/
function getLocation() {
    if (navigator.geolocation) {
        var pos = navigator.geolocation.getCurrentPosition(showPosition);
        return [pos.coords.latitude, pos.coords.longitude];
    } else {
        return null; //location is not supported
    }
}

var pos = getLocation();

if (pos === null){
  pos = [40.712784, -74.005941];
}

console.log(pos);
/* 2.) create JSON request object */



/* 3.) send request object and recieve data */
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
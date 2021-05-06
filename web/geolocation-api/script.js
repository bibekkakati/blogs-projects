const mainSection = document.getElementById("main");
const actions = document.getElementById("actions");
const error = document.getElementById("error");
const errorMessage = document.getElementById("errorMessage");
const longitude = document.getElementById("longitude");
const latitude = document.getElementById("latitude");
const accuracy = document.getElementById("accuracy");
const altitude = document.getElementById("altitude");
const altitudeAccuracy = document.getElementById("altitudeAccuracy");
const heading = document.getElementById("heading");
const speed = document.getElementById("speed");
const time = document.getElementById("time");

const currentLocationBtn = document.getElementById("currentLocationBtn");
const liveLocationBtn = document.getElementById("liveLocationBtn");
const cancelLiveLocationBtn = document.getElementById("cancelLiveLocationBtn");

function main() {
	if (Boolean(window.navigator.geolocation)) {
		// It supports
		mainSection.style.display = "flex";
		currentLocationBtn.onclick = function (e) {
			getLocation();
		};
		liveLocationBtn.onclick = function (e) {
			liveLocation();
		};
	} else {
		alert("error");
		mainSection.style.display = "none";
		actions.style.display = "none";
		error.style.display = "block";
	}
}

function stopLiveLocation(id) {
	window.navigator.geolocation.clearWatch(id);
	liveLocationBtn.style.display = "inline";
	cancelLiveLocationBtn.style.display = "none";
}

function liveLocation() {
	const id = window.navigator.geolocation.watchPosition(
		positionCallback,
		errorCallback
	);
	liveLocationBtn.style.display = "none";
	cancelLiveLocationBtn.style.display = "inline";
	cancelLiveLocationBtn.onclick = function (e) {
		stopLiveLocation(id);
	};
}

function getLocation() {
	window.navigator.geolocation.getCurrentPosition(
		positionCallback,
		errorCallback,
		{
			enableHighAccuracy: true,
			timeout: 10000,
			maximumAge: 300000,
		}
	);
}

function getValue(value, unit = "", fix = 0) {
	return value === null ? "NA" : value.toFixed(fix) + " " + unit;
}

function getSpeedInKm(value, unit = "", fix = 0) {
	return value === null ? "NA" : (value * 1000).toFixed(fix) + " " + unit;
}

function positionCallback(position) {
	longitude.innerText = getValue(position.coords.longitude, "°", 6);
	latitude.innerText = getValue(position.coords.latitude, "°", 6);
	accuracy.innerText = getValue(position.coords.accuracy, "m", 2);
	altitude.innerText = getValue(position.coords.altitude, "m", 2);
	altitudeAccuracy.innerText = getValue(
		position.coords.altitudeAccuracy,
		"m",
		2
	);
	heading.innerText = getValue(position.coords.heading, "°", 2);
	speed.innerText = getSpeedInKm(position.coords.speed, "km/s", 2);
	time.innerText =
		position.timestamp === null
			? "NA"
			: new Date(position.timestamp).toLocaleTimeString();
}

function errorCallback(err) {
	let msg;
	switch (err.code) {
		case err.PERMISSION_DENIED:
			msg = "User denied the request for Geolocation.";
			break;
		case err.POSITION_UNAVAILABLE:
			msg = "Location information is unavailable.";
			break;
		case err.TIMEOUT:
			msg = "The request to get user location timed out.";
			break;
		case err.UNKNOWN_ERROR:
			msg = "An unknown error occurred.";
			break;
	}
	mainSection.style.display = "none";
	actions.style.display = "none";
	error.style.display = "block";
	errorMessage.innerText = msg;
	cancelLiveLocationBtn.click();
}

main();

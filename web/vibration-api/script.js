if (Boolean(window.navigator.vibrate) || Boolean(window.navigator.mozVibrate)) {
	const singleVibration = document.getElementById("singleVibration");
	const patternVibration = document.getElementById("patternVibration");
	const cancelVibration = document.getElementById("cancelVibration");

	window.navigator.vibrate =
		window.navigator.vibrate || window.navigator.mozVibrate;

	singleVibration.onclick = function (e) {
		window.navigator.vibrate(500);
	};

	patternVibration.onclick = function (e) {
		window.navigator.vibrate([500, 200, 800]);
	};

	cancelVibration.onclick = function (e) {
		window.navigator.vibrate(0);
	};
}

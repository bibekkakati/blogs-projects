if (Boolean(window.navigator.vibrate)) {
	const singleVibration = document.getElementById("singleVibration");
	const patternVibration = document.getElementById("patternVibration");
	const cancelVibration = document.getElementById("cancelVibration");

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

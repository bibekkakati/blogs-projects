function main() {
	const video = document.getElementById("video");
	const start = document.getElementById("start");
	const stop = document.getElementById("stop");

	var displayMediaOptions = {
		video: {
			cursor: "always",
		},
		audio: false,
	};

	start.onclick = function (e) {
		startSharing();
	};

	stop.onclick = function (e) {
		stopSharing();
	};

	async function startSharing() {
		let capture = null;
		try {
			capture = await navigator.mediaDevices.getDisplayMedia(
				displayMediaOptions
			);

			capture
				.getVideoTracks()[0]
				.addEventListener("ended", () => stopSharing());

			video.srcObject = capture;
		} catch (error) {
			console.log(error);
		}
	}

	function stopSharing() {
		let tracks = video.srcObject.getTracks();
		tracks.forEach((track) => track.stop());
		video.srcObject = null;
	}
}

main();

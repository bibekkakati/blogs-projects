function main() {
	const classifier = ml5.imageClassifier("MobileNet", modelLoaded);
	const uploadButton = document.getElementById("uploadButton");
	const linkButton = document.getElementById("linkButton");
	const classifyButton = document.getElementById("classifyButton");
	const selectImage = document.getElementById("selectImage");
	const imageViewContainer = document.getElementById("imageViewContainer");
	const imageView = document.getElementById("imageView");
	const result = document.getElementById("result");
	const loaderView = document.getElementById("loaderView");
	const mainView = document.getElementById("mainView");

	uploadButton.onclick = function (e) {
		selectImage.click();
	};

	classifyButton.onclick = function (e) {
		classify(imageView);
	};

	linkButton.onclick = function (e) {
		const link = prompt("Paste Image Link Here");
		if (link != null && link != undefined) {
			imageView.src = link;
			imageViewContainer.style.display = "flex";
			result.innerText = "";
		}
	};

	selectImage.onchange = function () {
		if (this.files && this.files[0]) {
			var reader = new FileReader();
			reader.onload = function (e) {
				imageView.src = e.target.result;
				imageViewContainer.style.display = "flex";
				result.innerText = "";
			};
			reader.readAsDataURL(this.files[0]);
		}
	};

	function modelLoaded() {
		loaderView.style.display = "none";
		mainView.style.display = "flex";
	}

	function classify(img) {
		classifier.predict(img, function (err, results) {
			if (err) {
				return alert(err);
			} else {
				result.innerText = results[0].label;
			}
		});
	}
}

function main() {
	const inputBox = document.getElementById("inputBox");
	const result = document.getElementById("result");
	const decBtn = document.getElementById("decBtn");
	const incBtn = document.getElementById("incBtn");

	var worker = new Worker("./worker.js");

	worker.onmessage = function (e) {
		result.innerText = e.data;
	};

	worker.onerror = function (err) {
		alert(err.message);
	};

	decBtn.onclick = function (e) {
		let num = parseInt(inputBox.value);
		if (num > 1) {
			num--;
			inputBox.value = num;
			worker.postMessage(num);
		}
	};

	incBtn.onclick = function (e) {
		let num = parseInt(inputBox.value);
		if (num > 0) {
			num++;
			inputBox.value = num;
			worker.postMessage(num);
		}
	};
}
main();

const contentCp = document.getElementById("content-cp");
const contentCt = document.getElementById("content-ct");
const copyBtn = document.getElementById("copy");
const cutBtn = document.getElementById("cut");

copyBtn.onclick = copyToClipboard;
cutBtn.onclick = cutToClipboard;

function copyToClipboard() {
	navigator.clipboard
		.writeText(contentCp.innerText)
		.then(() => alert("Copied to clipboard"))
		.catch((e) => alert(e.message));
}

function cutToClipboard() {
	navigator.clipboard
		.writeText(contentCt.innerText)
		.then(() => {
			contentCt.innerText = "";
			alert("Copied to clipboard");
		})
		.catch((e) => alert(e.message));
}

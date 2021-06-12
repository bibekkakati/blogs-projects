const content = document.getElementById("content");
const copyBtn = document.getElementById("copy");

copyBtn.onclick = copyToClipboard;

function copyToClipboard() {
	navigator.clipboard
		.writeText(content.innerText)
		.then(() => alert("Copied to clipboard"))
		.catch((e) => alert(e.message));
}

function main() {
	var view = document.getElementById("view");
	var exportPDF = document.getElementById("export-pdf");
	exportPDF.onclick = (e) => html2pdf(view);
}

// PDF Viewer Script

const urlParams = new URLSearchParams(window.location.search);
const pdfFile = urlParams.get("file");
const title = pdfFile.replace(".pdf", "").replace(/_/g, " ");
document.getElementById("pdfTitle").innerHTML = "📖 " + title + " Notes";
const pdfUrl = "pdf/" + pdfFile;

let pdfDoc = null;
let pageNum = 1;

const canvas = document.getElementById("pdfCanvas");
const ctx = canvas.getContext("2d");

function renderPage(num){

pdfDoc.getPage(num).then(function(page){

let viewport = page.getViewport({scale:1.5});

canvas.height = viewport.height;
canvas.width = viewport.width;

let renderContext = {
canvasContext:ctx,
viewport:viewport
};

page.render(renderContext);

document.getElementById("pageNumber").innerHTML =
"Page " + num + " / " + pdfDoc.numPages;

});

}


pdfjsLib.getDocument(pdfUrl).promise.then(function(pdf){

pdfDoc = pdf;

renderPage(pageNum);

});


function nextPage(){

if(pageNum < pdfDoc.numPages){

pageNum++;
renderPage(pageNum);

}

}


function previousPage(){

if(pageNum > 1){

pageNum--;
renderPage(pageNum);

}

}

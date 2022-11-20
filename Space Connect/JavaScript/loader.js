/* ############## Page Loading Animation ############### */

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader-wrapper").style.display = "none";
  document.getElementById("body").style.display = "block";
}
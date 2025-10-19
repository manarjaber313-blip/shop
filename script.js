document.getElementById("contactform").onsubmit = function () {
  alert("done");
  return false;
};

document.getElementsByTagName("tr")[1].onclick = function () {
  alert("Sold Out");

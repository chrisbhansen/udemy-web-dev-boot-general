var byID = document.getElementById("first");
byID.style.fontWeight = "bold";

var byClass = document.getElementsByClassName("special");
byClass[0].style.fontStyle = "italic";

var byQSel = document.querySelector("p");
byQSel.style.color = "purple";

var byQSelAll = document.querySelectorAll(".special");
byQSelAll[0].style.backgroundColor = "yellow";
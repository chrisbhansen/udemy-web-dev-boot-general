var tag = document.getElementById("highlight");
tag.style.fontStyle = "italic";

// returns list of elements, so you must indicate each directly
var tags = document.getElementsByClassName("bolded");
tags[0].style.fontWeight = "bold";
tags[1].style.fontWeight = "bold";

// returns list of elements, so you must indicate each directly
var tagName = document.getElementsByTagName("li");
tagName[0].style.color = "orange";
tagName[1].style.color = "orange";
tagName[2].style.color = "orange";

// only returns the first instance, even if there are others on the page
var qSel = document.querySelector("li");
qSel.style.backgroundColor = "yellow";

// returns list of elements, so you must indicate each directly
var all = document.querySelectorAll("h1");
all[0].style.color = "purple";
all[1].style.color = "purple";
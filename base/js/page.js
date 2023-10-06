var title = document.title;

var header = "<h1>" + title + "</h1><hr>";
var footer = "<hr><p class='copyright'>Copyright © 2023 " + document.getElementById("footer").innerHTML + " All Rights Reserved.</p>";

document.getElementById("header").innerHTML = header;
document.getElementById("footer").innerHTML = footer;
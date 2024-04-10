var title = document.title;

var header = "<h1>" + title + "</h1><hr>";
var footer = "<hr><p class='copyright'>Copyright © 2019-" + new Date(Date.parse(new Date())).getFullYear() + " " + document.getElementById("footer").innerHTML + " All Rights Reserved. | <a href='https://quinn0823.github.io/'  target='_blank'>Quinn-Web</a></p>";

document.getElementById("header").innerHTML = header;
document.getElementById("footer").innerHTML = footer;
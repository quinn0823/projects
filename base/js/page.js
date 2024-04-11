var title = document.title;

var update = document.getElementById("update").innerHTML;
var year = document.getElementById("year").innerHTML;
var people = document.getElementById("people").innerHTML;

var header = "<h1>" + title + "</h1><hr>";
var footer = "<hr><p class='footer'>Last Updated: " + update + " | Copyright © " + year + " " + people + " All Rights Reserved. | <a href='https://quinn0823.github.io/' target='_blank'>Quinn-Web</a></p>";

document.getElementById("header").innerHTML = header;
document.getElementById("footer").innerHTML = footer;
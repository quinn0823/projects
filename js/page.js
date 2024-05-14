var title = document.title;
var path = window.location.pathname;

var update = document.getElementById("update").innerHTML;
var year = document.getElementById("year").innerHTML;
var people = document.getElementById("people").innerHTML;

var header = "<h1 id='header_h1'>" + title + "</h1><hr>";
var footer = "<hr><p class='footer' id='footer_p'>Last Updated: " + update + " | Copyright © " + year + " " + people + " All Rights Reserved.</p><p class='footer'><a id='footer_a1' href='https://quinn0823.github.io/' target='_blank'>Quinn-Web</a> | <a id='footer_a2' href='https://github.com/Quinn0823" + path + "' target='_blank'>GitHub</a></p>";

document.getElementById("header").innerHTML = header;
document.getElementById("footer").innerHTML = footer;
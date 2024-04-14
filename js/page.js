var title = document.title;

var update = document.getElementById("update").innerHTML;
var year = document.getElementById("year").innerHTML;
var people = document.getElementById("people").innerHTML;

var header = "<h1>" + title + "</h1><hr>";
var footer = "<hr><p class='footer'>Last Updated: " + update + " | Copyright © " + year + " " + people + " All Rights Reserved. | <a href='https://quinn0823.github.io/' target='_blank'>Quinn-Web</a></p>";

document.getElementById("header").innerHTML = header;
document.getElementById("footer").innerHTML = footer;

var clipboard = new ClipboardJS('.copy_text');

clipboard.on('success', function(e) {
    alert(e.text + "has been copied.");

    // console.info('Action:', e.action);
    // console.info('Text:', e.text);
    // console.info('Trigger:', e.trigger);

    // e.clearSelection();
});

clipboard.on('error', function(e) {
    // console.error('Action:', e.action);
    // console.error('Trigger:', e.trigger);
});
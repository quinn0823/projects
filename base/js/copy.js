document.write("<textarea id='copy_box'></textarea>");

function copy(inputText) { 
    var text = document.getElementById("copy_box");
    text.value = inputText;
    text.select();
    document.execCommand("copy");
    alert("\"" + inputText + "\" has been copied!");
}
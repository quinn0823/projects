function getQueryString(name) {
    var url_string = document.getElementById("url_i").value;
    var url = new URL(url_string);
    return url.searchParams.get(name);
}
function output() {
    if(document.getElementById("url_i").value.indexOf("contentId") == -1) {
        alert("The URL must include \"contentId\"!");
    } else {
        window.open("https://r1-ndr.ykt.cbern.com.cn/edu_product/esp/assets_document/" + getQueryString("contentId") + ".pkg/pdf.pdf");
    }
}
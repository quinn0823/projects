var select = document.getElementById("type");
var choose;
var type

/* --- 显示与隐藏 --- */
document.getElementById("stepHide").style.display = "none";
document.getElementById("stepOut").style.display = "none";

document.getElementById("docuHide").style.display = "none";
document.getElementById("docuOut").style.display = "none";

/* --- 默认选中 iPhone --- */
select.options[2].selected = true;

/* --- 默认文本 --- */
/* 版权声明 */
/* var copyrightOut = "<p><br>由 Quinn0823 书写。</p>"; */
/* 步骤 */
document.getElementById("stepOut").innerHTML = "<br><p>尝试以下操作步骤：<p>";

/* --- 步骤列表 --- */
var i = 0;
var stepOut = document.getElementById("stepOut");
var stepList = document.createElement("ol");
stepOut.appendChild(stepList);

/* document.getElementById("copyrightOut").innerHTML = copyrightOut; */

typeChange();
function typeChange() {
    choose = select.selectedIndex;
    type = select.options[choose].text;
    var endingOut = "<br><p>如果以上没能很好地解决你的问题，你可以联系 Apple 以获取更多协助。只需要点击以下链接，并选择“" + type + "”：<a href='https://getsupport.apple.com/products'>Apple Support</a>。希望可以帮助到你，谢谢！</p>";
    document.getElementById("endingOut").innerHTML = endingOut;
}

probChange();
function probChange() {
    var probOut = "<p>针对你在 " + type + " 上遇到的“" + document.getElementById("probIn").value + "”问题，你可以：</p>";
    document.getElementById("probOut").innerHTML = probOut;
}


function contChange() {
    if(document.getElementById("step").checked == true) {
        document.getElementById("stepHide").style.display = "inline";

        document.getElementById("stepOut").style.display = "inline";
    } else if(document.getElementById("step").checked == false) {
        document.getElementById("stepHide").style.display = "none";

        document.getElementById("stepOut").style.display = "none";
    }

    if(document.getElementById("docu").checked == true) {
        document.getElementById("docuHide").style.display = "inline";

        document.getElementById("docuOut").style.display = "inline";
    } else if(document.getElementById("docu").checked == false) {
        document.getElementById("docuHide").style.display = "none";
        
        document.getElementById("docuOut").style.display = "none";
    }
}

function docuSet() {
    var docuText = document.getElementById("textIn").value;
    var docuUrl = document.getElementById("urlIn").value;
    if(docuUrl.indexOf("https://support.apple.com/zh-cn/") == -1) {
        alert("链接需包含“https://”，且必须为 Apple 技术支持中文文档。")
    } else {
        if(docuText == "") {
            docuText = docuUrl;
        }
        var docuOut = "<br><p>参考以下技术文档：<a href='" + docuText + "'>" + docuUrl + "</a></p>";
        document.getElementById("docuOut").innerHTML = docuOut;
    }
}


function stepAdd() {
    var stepIn = document.getElementById("stepIn").value;
    var li = document.createElement("li");
    stepList.appendChild(li);
    li.innerText = stepIn;
    li.setAttribute("class", "step" + (i++));
    document.getElementById("stepIn").value = "";
    li.onmouseover = function () {
        this.style.backgroundColor = "#ff0000";
        this.style.color = "#fff";
    }
    li.onmouseout = function () {
        this.style.backgroundColor = "";
        this.style.color = "";
    }
    li.onclick = function () {
        stepList.removeChild(this);
    }
}

function outChoose() {
    var cont = document.getElementById("output");
    if (document.body.createTextRange) {
        var range = document.body.createTextRange();
        range.moveToElementText(cont);
        range.select();
    } else if (window.getSelection) {
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(cont);
        selection.removeAllRanges();
        selection.addRange(range);
    }
    document.execCommand("copy");
} 
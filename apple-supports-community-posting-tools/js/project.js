var select = document.getElementById("type");
var choose;
var type


/* --- 步骤列表 --- */
var i = 0;
var stepOut = document.getElementById("stepOut");
var stepList = document.createElement("ol");
stepOut.appendChild(stepList);

/* --- 显示与隐藏 --- */
document.getElementById("stepHide").style.display = "none";
document.getElementById("stepOut").style.display = "none";

document.getElementById("docuHide").style.display = "none";
document.getElementById("docuOut").style.display = "none";

/* --- 默认选中 iPhone --- */
select.options[11].selected = true;

/* --- 默认文本 --- */
/* 打招呼 */
var greetOut = "<p>👋 你好！我是 Quinn0823，很高兴能帮助你。</p>";
/* 版权声明 */
var copyrightOut = "<p>由 <a href='https://quinn0823.github.io/'>Quinn0823</a> 书写。版权所有。</p>";

document.getElementById("greetOut").innerHTML = greetOut;
document.getElementById("copyrightOut").innerHTML = copyrightOut;

typeChange();
function typeChange() {
    choose = select.selectedIndex;
    type = select.options[choose].text;
    var endingOut = "<p>以上是我竭尽所能为你提供的帮助。如果以上帮助没能很好地解决你的问题，联系 Apple 支持获得或许也是个不错的方法。获取更多支持，你只需要点击以下链接，并选择“" + type + "”：<a href='https://getsupport.apple.com/products'>Apple Support</a>。</p>";
    document.getElementById("endingOut").innerHTML = endingOut;
}

probChange();
function probChange() {
    var probOut = "<p>根据你的描述，我了解到你在 " + type + " 方面遇到了“" + document.getElementById("probIn").value + "”的问题。针对此情况，你可以：</p>";
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
        var docuOut = "<ul><li>参考以下技术文档：<a href='" + docuText + "'>" + docuUrl + "</a></li></ul>";
        document.getElementById("docuOut").innerHTML = docuOut;
    }
}


function add() {
    var stepIn = document.getElementById("stepIn").value;
    var li = document.createElement("li");
    stepList.appendChild(li);
    li.innerText = stepIn;
    li.setAttribute("class", "step" + (i++));
    li.onmouseover = function () {
        this.style.color = "red";
    }
    li.onmouseout = function () {
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
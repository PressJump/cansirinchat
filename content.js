//when webpage updates, replace text "can" with can.gif
document.addEventListener(
    "DOMNodeInserted",
    function (e) {
        var url = chrome.extension.getURL("can.gif");
        //replace can with gif of can
        var can = document.body.innerHTML.replace(/can/, "<img src='" + url + "'/>");
    },
    false
);

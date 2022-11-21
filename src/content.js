//when webpage updates, replace text "can" with can.gif
document.addEventListener(
    "DOMNodeInserted",
    function (e) {
        //if chat-line-message
        if (e.target.className == "chat-line__message") {
            // chat-message-text

            //if message contains "can"
            if (e.target.innerText.includes("can")) {
                //replace "can" with can.gif
                //if parent of e is class is text-fragment
                if (e.target.parentElement.className != "chat-author__display-name") {
                    var url = chrome.extension.getURL("can.gif");
                    e.target.innerHTML = e.target.innerHTML.replace(/can/g, '<img src="' + url + '" width="30" height="30">');
                }
            }
        }
    },
    false
);

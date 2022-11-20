//when webpage updates, replace text "can" with can.gif
document.addEventListener(
    "DOMNodeInserted",
    function (e) {
        //if chat-line-message
        if (e.target.className == "chat-line__message") {
            //if message contains "can"
            if (e.target.innerText.includes("can")) {
                //replace "can" with can.gif
                e.target.innerHTML = e.target.innerHTML.replace(/can/g, '<img src="https://i.imgur.com/dnqKfZY.gif" width="30" height="30">');
            }
        }
    },
    false
);

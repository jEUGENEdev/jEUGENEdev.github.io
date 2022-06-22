let sendMsgBtn = document.getElementById("send");
let text = document.getElementById("text");
let msgs = document.getElementsByClassName("msg")[0];

sendMsgBtn.addEventListener('click', () => {
    let msg = document.createElement("div");
    let txt = document.createElement("a");
    txt.innerText = text.value;
    text.value = "";
    msg.append(txt);
    msg.style = "padding: 5px;";
    msgs.append(msg);
});
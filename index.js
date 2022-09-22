let messages = document.getElementById("messages");
function scrollToBottom() {
  messages.scrollTop = messages.scrollHeight;
}
scrollToBottom();


// 
// let send = document.getElementById("send-btn");
// // let msgbox = document.getElementById("karan");
// let msg_holder = document.getElementById("messages")


// send.addEventListener("click", sendmsg);
// function sendmsg(){
//     // msg_holder.
//    msgbox.innerText = writer.value
//    writer.value = ""
// }
let writer = document.getElementById("writer");
let send = document.getElementById("send-btn");
let msg_holder = document.getElementById("messages")
send.addEventListener("click", sendmsg);
function sendmsg(){
    let send = document.createElement("div")
    send.classList.add("sent")
    msg_holder.appendChild(send);
    let msg_plate = document.createElement("div");
    msg_plate.classList.add("msg-plate");
    send.appendChild(msg_plate);
    msg_plate.innerText = writer.value
    writer.value = ""
}


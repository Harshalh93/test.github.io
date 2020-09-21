

var brk = document.createElement("br");

function love() {
 var heart = document.getElementById("love");
 heart.innerHTML = "♥";
 var msg = document.createElement("img");
 msg.src =
  "https://i.pinimg.com/originals/93/f9/9b/93f99bc8dcf312cee4cc34b33de657ce.gif";
 heart.appendChild(brk);
 heart.appendChild(msg);
}

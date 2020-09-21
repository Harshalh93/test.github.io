

var brk = document.createElement("br");

function love() {
 var heart = document.getElementById("love");
 heart.innerHTML = "♥";
 var msg = document.createElement("img");
 msg.src =
  "/root/Animated_Heart_GIF_Picture.gif";
 heart.appendChild(brk);
 heart.appendChild(msg);
}

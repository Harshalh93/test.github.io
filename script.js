

var brk = document.createElement("br");

function love() {
 var heart = document.getElementById("love");
 heart.innerHTML = "♥";
 var msg = document.createElement("img");
 msg.src =
  "https://media.tenor.com/images/a3edb9b14b72a74373debf57a2e448ec/tenor.gif";
 heart.appendChild(brk);
 heart.appendChild(msg);
}

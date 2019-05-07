let count = 1;

const dashGenerator = count => new Array(count).fill(".").join("");

const startCounting = function() {
  const _ = dashGenerator(count);
  document.getElementById("waiting-text").innerText = "press it again" + _;
  if (count++ < 1) return;
  displayMsg();
};

const displayMsg = function() {
  const body = document.getElementById("body");
  const name = document.getElementById("name").value.toUpperCase();
  const msg = "HAPPY BIRTHDAY " + name;
  const msgDiv = document.createElement("div");
  msgDiv.className = "msg-text";
  msgDiv.innerText = msg;
  body.innerHTML = "";
  body.appendChild(msgDiv);
  body.style.background = 'url("./hbd.gif")';
  document.getElementById("quote").style.visibility = "visible";
};

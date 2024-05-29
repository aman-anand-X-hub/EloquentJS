let dots = [];

for (let i = 0; i < 12; i++) {
  let dott = document.createElement("div");
  dott.className = "trail";
  document.body.appendChild(dott);
  dots.push(dott);
}

let idx = 0;

window.addEventListener("mousemove", event => {
  let dot = dots[idx];
  dot.style.left = (event.pageX - 3) + "px";
  dot.style.top = (event.pageY - 3) + "px";
  idx = (idx + 1) % dots.length;
});

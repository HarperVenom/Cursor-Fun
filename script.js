const aim = document.createElement("div");
aim.classList.add("aim");
document.body.appendChild(aim);
//Gives access to all style attributes of an element
const aimStyle = window.getComputedStyle(aim);
console.log(
  `calc(${50}vw - ${parseInt(aimStyle.width) / 2}px - ${aimStyle.borderWidth})`
);

aim.style.left = `calc(${50}vw - ${parseInt(aimStyle.width) / 2}px - ${
  aimStyle.borderWidth
})`;
aim.style.top = `calc(${50}vh - ${parseInt(aimStyle.height) / 2}px - ${
  aimStyle.borderWidth
})`;

let interval;

document.body.addEventListener("mousemove", (e) => {
  resetTimer();
  allignAim(e);
  extendAim();
});

function allignAim(e) {
  aim.style.left = `calc(${e.clientX - parseInt(aimStyle.width) / 2}px - ${
    aimStyle.borderWidth
  })`;
  aim.style.top = `calc(${e.clientY - parseInt(aimStyle.height) / 2}px - ${
    aimStyle.borderWidth
  })`;
}

function extendAim() {
  aim.classList.add("extended");

  interval = setTimeout(() => {
    aim.classList.remove("extended");
  }, 1000);
}

function resetTimer() {
  if (interval !== undefined) {
    window.clearInterval(interval);
  }
}

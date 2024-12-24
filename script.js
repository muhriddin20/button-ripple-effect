const btns = document.querySelectorAll(".btns button");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let x = e.offsetX;
    let y = e.offsetY;

    let ripple = document.createElement("span");
    ripple.style.top = `${y}px`;
    ripple.style.left = `${x}px`;
    btn.appendChild(ripple);
    setTimeout(() => {
      ripple.remove();
    }, 500);
  });
});

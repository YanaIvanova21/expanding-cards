const panels = document.querySelectorAll(".panel");

panels.forEach((element) => {
  element.addEventListener("click", (event) => onClickEventHandler(event));
});

function onClickEventHandler(event) {
  removeActiveClass(panels);
  addActiveClass(event.srcElement);
}

function removeActiveClass(panels) {
  panels.forEach((element) => {
    element.classList.remove("active");
  });
}

function addActiveClass(panel) {
  panel.classList.add("active");
}

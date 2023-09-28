const mark = document.querySelector("#mark");
const mainBoxes = document.querySelectorAll(".main-box");
const num = document.querySelector("#num");

mark.addEventListener("click", () => {
  mainBoxes.forEach((mainBox) => {
    mainBox.style.backgroundColor = "transparent";
    num.innerHTML = "0";
  });
});

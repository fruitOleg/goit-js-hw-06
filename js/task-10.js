function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const divBoxes = document.querySelector("#boxes");
const input = document.querySelector("input");
let amount = 0;
input.addEventListener("change", onChangeValue);
createBtn.addEventListener("click", onCreateBtnClick);
destroyBtn.addEventListener("click", destroyBoxes);

function onChangeValue(event) {
  amount = event.target.value;
}
function onCreateBtnClick() {
  createBoxes(amount);
}
function createBoxes() {
  const elements = [];
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement("div");
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.width = `${size}px`;
    divEl.style.height = `${size}px`;
    elements.push(divEl);
    size += 10;
  }
  divBoxes.append(...elements);
}

function destroyBoxes() {
  divBoxes.innerHTML = "";
}

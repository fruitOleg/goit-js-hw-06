function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const divBoxes = document.querySelector('#boxes');

createBtn.addEventListener("click",
   createBoxes((amount) => divBoxes.push(document.createElement("div"))));
// div#boxes


// destroyBoxes();
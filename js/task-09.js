function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyStyle = document.querySelector('body')
const colorValue = document.querySelector(".color");
const colorBtnChange = document.querySelector(".change-color");

colorBtnChange.addEventListener('click', () => {
   let onClickChange = getRandomHexColor();

   bodyStyle.style.backgroundColor = onClickChange;
   colorValue.textContent = onClickChange;
})


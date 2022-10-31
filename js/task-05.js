const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

const onInput = ({ target }) => {
  nameOutput.textContent = target.value;
  if (nameInput === "") {
   nameOutput.textContent = "Anonymus";
  }
};
nameInput.addEventListener("input", onInput);

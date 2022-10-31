const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

const onInput = ({ target }) => {
  nameOutput.textContent = target.value;
  if (nameInput.value === "") {
    nameOutput.textContent = "Anonymous";
  }
};
nameInput.addEventListener("input", onInput);

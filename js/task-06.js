const textInput = document.getElementById("validation-input");

const blurCheck = (event) => {
  if (event.currentTarget.value.length === Number(textInput.dataset.length)) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  }
};

textInput.addEventListener("blur", blurCheck);

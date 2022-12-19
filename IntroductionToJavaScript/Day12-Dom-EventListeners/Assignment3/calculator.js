const button = document.getElementsByClassName("box");
const inputField = document.getElementById("number-input");
let infoPara = document.getElementById("info");

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", (event) => {
    infoPara.style.display = "none;";
    let inputText = "";
    switch (event.target.innerHTML) {
      case "C":
        break;
      case "=":
        try {
          inputText = eval(inputField.value);
        } catch (e) {
          inputText = "";
          infoPara.style.display = "block";
          infoPara.innerHTML = "Invalid Operation";
        }
        break;
      case "←":
        inputText = inputField.value.slice(0, inputField.value.length - 1);
        break;
      default:
        inputText = `${inputField.value}${event.target.innerHTML}`;
    }

    inputField.value = inputText;
  });
}

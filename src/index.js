import "./styles/index.scss";

let erasureOption = "blackout";
window.erasureOption = erasureOption;

let erasureSelection = "character";
window.erasureSelection = erasureSelection;

document.getElementById("current-style").innerHTML = `Current Erasure Style: ${
  window.erasureOption.charAt(0).toUpperCase() + window.erasureOption.slice(1)
}`;

document.getElementById(
  "current-seclection-style"
).innerHTML = `Current Selection Style: ${
  window.erasureSelection.charAt(0).toUpperCase() +
  window.erasureSelection.slice(1)
}`;

window.changeErasureOption = function changeErasureOption(option) {
  window.erasureOption = option

  document.getElementById("current-style").innerHTML = `Current Style: ${
    window.erasureOption.charAt(0).toUpperCase() + window.erasureOption.slice(1)
  }`;

}

window.changeSelectionOption = function changeSelectionOption(option) {
  window.erasureSelection = option;

  document.getElementById(
    "current-seclection-style"
  ).innerHTML = `Current Selection Style: ${
    window.erasureSelection.charAt(0).toUpperCase() +
    window.erasureSelection.slice(1)
  }`;
};




window.submitText = function submitText() {
  const submittedText = document.getElementById("submitedText").value;

  submittedText.split("").forEach((letter) => {

    const span = document.createElement("span");
    span.className = "visible";
    span.innerHTML = letter;
    span.addEventListener("click", function() {
      this.classList.toggle(`${window.erasureOption}`);
    });

    const paragraph = document.getElementById("targetText");
    paragraph.append(span);
  });
};

window.clearText = function clearText() {
  const submittedText = document.getElementById("targetText").innerHTML = "";
};

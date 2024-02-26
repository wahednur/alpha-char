function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function getARandomAlphabet() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");

  //   get a random index between 0 - 25
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);

  const alphabet = alphabets[index];
  console.log("Random Alphabet ", alphabet);
  return alphabet;
}

function setBgColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("kbrd-bg");
}

function removeBgColorByID(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("kbrd-bg");
}

// Input text input value for score life
function getTextElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementTextValue = element.innerText;
  const value = parseInt(elementTextValue);
  return value;
}

function setTextElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function getElementTextById(elementId) {
  const currentAlphabet = document.getElementById(elementId).innerText;
  return currentAlphabet;
}

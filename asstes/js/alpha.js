function continueGame() {
  const alphabet = getARandomAlphabet();

  // set rendomly generated alphabet  to see in the screen
  const currentAlphabet = document.getElementById("current-alphabet");
  currentAlphabet.innerText = alphabet;
  setBgColorById(alphabet);
}

function play() {
  hideElementById("home-screen");
  showElementById("play-screen");
  continueGame();
}

function handleKeyBoardKeyUpEvent(event) {
  const playerKeyPres = event.key;
  // console.log( playerKeyPres);
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLocaleLowerCase();

  // console.log(playerKeyPres, expectedAlphabet);

  if (playerKeyPres === expectedAlphabet) {
    console.log("You got a pont");
    const currentScore = getTextElementValueById("current-score");
    const newScore = currentScore + 1;
    setTextElementValueById("current-score", newScore);
    removeBgColorByID(expectedAlphabet);
    if (newScore % 5 === 0) {
      const crnLife = getElementNumberById("current-life");
      document.getElementById("current-life").innerText = crnLife + 1;
    }
    continueGame();
  } else {
    const getCurrentLifeNumbers = document.getElementById("current-life");
    const currentLifeNumbers = getCurrentLifeNumbers.innerText;
    const currentLife = parseInt(currentLifeNumbers);
    const newLife = currentLife - 1;
    getCurrentLifeNumbers.innerText = newLife;
    console.log("You lost a point", currentLife);
    if (newLife === 0) {
      gameOver();
    }
  }
}
function getElementNumberById(id) {
  const getStrValue = document.getElementById(id).innerText;
  const intValue = parseInt(getStrValue);
  return intValue;
}
function gameOver() {
  hideElementById("play-screen");
  showElementById("home-screen");
  console.log("Game over");
  location.reload();
}

document.addEventListener("keyup", handleKeyBoardKeyUpEvent);

// function handleKeyBoardKeyUpEvent(event) {
//   const playerKeyPres = event.key;
//   // console.log( playerKeyPres);
//   const currentAlphabetElement = document.getElementById("current-alphabet");
//   const currentAlphabet = currentAlphabetElement.innerText;
//   const expectedAlphabet = currentAlphabet.toLocaleLowerCase();

//   // console.log(playerKeyPres, expectedAlphabet);

//   if (playerKeyPres === expectedAlphabet) {
//     const getCurrentScoreNumbers = document.getElementById("current-score");
//     const CurrentScoreNumbers = getCurrentScoreNumbers.innerText;
//     const currentScore = parseInt(CurrentScoreNumbers);
//     const newScore = currentScore + 1;
//     getCurrentScoreNumbers.innerText = newScore;
//     console.log(newScore);
//     removeBgColorByID(expectedAlphabet);
//     continueGame();
//   } else {
//     const getCurrentLifeNumbers = document.getElementById("current-life");
//     const currentLifeNumbers = getCurrentLifeNumbers.innerText;
//     const currentLife = parseInt(currentLifeNumbers);
//     const newLife = currentLife - 1;
//     getCurrentLifeNumbers.innerText = newLife;
//     console.log("You lost a point", currentLife);
//   }
// }

// document.addEventListener("keyup", handleKeyBoardKeyUpEvent);

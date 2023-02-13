const hide = "none";
const userWinResults = [
  "scissorspaper",
  "paperrock",
  "rocklizard",
  "lizardspock",
  "spockscissors",
  "rockscissors",
  "scissorslizard",
  "lizardpaper",
  "paperspock",
  "spockrock",
];

const primarySection = document.querySelector(".primary-section");
const secondarySection = document.querySelector(".secondary-section");

const cardElementsChosen = document.querySelectorAll(".card-element");
const cardElementsHouse = Array.from(
  document.querySelectorAll(".card-element")
);
const pickedCardElements = document.querySelector(".chosen-cards");
const cardChosen = document.querySelector(".card-picked");
const cardHouse = document.querySelector(".card-house");
const rulesModal = document.querySelector(".modal-rules");
const resultTitleElement = document.querySelector("#status");
const score = document.querySelector("#score-points");

const startButton = document.querySelector("#start");
const playAgainButton = document.querySelector("#play-again");
const rulesButton = document.querySelector("#button-rules");
const closeModalbutton = document.querySelector("#fechar");

function handleSelectedCard() {
  const cardPicked = this.innerHTML;
  pickedCardElements.innerHTML = cardPicked;
}
cardElementsChosen.forEach((cardPicked) => {
  cardPicked.addEventListener("click", handleSelectedCard);
});

function getUserChoice() {
  return (cardChosen.innerHTML = pickedCardElements.innerHTML);
}

function getHouseChoice() {
  const numAleatorio = parseInt(Math.random() * cardElementsHouse.length);
  const pickedHouse = cardElementsHouse[numAleatorio].innerHTML;
  return (cardHouse.innerHTML = pickedHouse);
}

function getUserWinsStatus(result) {
  return userWinResults.some((winStr) => winStr === result);
}

function calculateScore(num) {
  const points = parseInt(score.textContent) + num;
  score.innerHTML = points;
}

function calculateWinner(user, house) {
  if (user === house) {
    resultTitleElement.innerText = "Tie";
  } else if (getUserWinsStatus(user + house)) {
    resultTitleElement.innerText = "You win";
    calculateScore(1);
  } else {
    resultTitleElement.innerText = "You lose";
    calculateScore(-1);
  }
}

function startGame() {
  const player = cardChosen.children[0].getAttribute("alt");
  const house = cardHouse.children[0].getAttribute("alt");
  calculateWinner(player, house);
}

function clearOptions() {
  pickedCardElements.innerHTML = '<p class=" large-general-font ativo">?</p>';
  cardChosen.children[0].remove();
  cardHouse.children[0].remove();
}

startButton.addEventListener("click", () => {
  if (pickedCardElements.children[0].classList.contains("ativo")) {
    return;
  }

  getUserChoice();

  primarySection.style.display = hide;
  secondarySection.style.display = "grid";
  getHouseChoice();
  startGame();
});

playAgainButton.addEventListener("click", () => {
  clearOptions();
  primarySection.style.display = "flex";
  secondarySection.style.display = hide;
});

// button das regras mostra modal
rulesButton.addEventListener("click",()=>{
  rulesModal.style.display = "flex";
});
// button de fechar modal
closeModalbutton.addEventListener("click",()=>{
  rulesModal.style.display = hide;
});

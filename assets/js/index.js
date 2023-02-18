const visible = "hidden";
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
const heije = window.innerHeight;
const panelCards = document.querySelector(".cards-js");
const panelResult = document.querySelector(".result-js");

const cardsPlayer = document.querySelectorAll(".cards__element--js");
const cardsHouse = document.querySelectorAll(".cards__element--js");

const panelChosenCard = document.querySelector(".cards__chosen--js");

const cardChosenPlayer = document.querySelector(".card__player--js");
const cardChosenHouse = document.querySelector(".card__house--js");

const resultTitle = document.querySelector(".status__title--js");
const counterPoints = document.querySelector(".scoreboard__counter--js");
const rulesModal = document.querySelector('.rules__modal--js');

const startButton = document.querySelector(".cards__panel--btn");
const playAgainButton = document.querySelector(".status__button--js");


function handleSelectedCard() {
  const card = this.innerHTML;
  panelChosenCard.innerHTML = card;
}
cardsPlayer.forEach((card) => {
  card.addEventListener("click", handleSelectedCard);
});

function getUserChoice() {
  return (cardChosenPlayer.innerHTML = panelChosenCard.innerHTML);
}
function getHouseChoice() {
  const numAleatorio = Math.floor(Math.random() * cardsHouse.length);
  const choiceHouse = cardsHouse[numAleatorio].innerHTML;
  return (cardChosenHouse.innerHTML = choiceHouse);
}

function winnerGame(){

  function getUserWinsStatus(result) {
    return userWinResults.some((winStr) => winStr === result);
  }

  function calculatePoints(num) {
    const points = parseInt(counterPoints.textContent) + num;
    counterPoints.innerHTML = points;
  }
  
  function calculateWinner(user, house) {
    if (user === house) {
      resultTitle.innerText = "Tie";
    } else if (getUserWinsStatus(user + house)) {
      resultTitle.innerText = "You win";
      calculatePoints(1);
    } else {
      resultTitle.innerText = "You lose";
      calculatePoints(-1);
    }
  }

  const player = cardChosenPlayer.children[0].getAttribute('alt');
  const house = cardChosenHouse.children[0].getAttribute('alt');

  return calculateWinner(player, house);
}
function clearCards() {
  panelChosenCard.children[0].remove();
  panelChosenCard.innerHTML = "?";
  cardChosenPlayer.children[0].remove();
  cardChosenHouse.children[0].remove();
}
function hiddenPanel() {
  
  if (!panelCards.classList.contains(visible)) {
    panelCards.classList.add(visible);
    panelResult.classList.remove(visible);
  } else {
    panelResult.classList.add(visible);
    panelCards.classList.remove(visible);
  }
}

function openModal(){
  rulesModal.classList.remove(visible);
}
function closeModal(){
  rulesModal.classList.add(visible);
}

startButton.addEventListener("click", () => {
  if (panelChosenCard.innerHTML === "?") {
    return;
  }
  hiddenPanel();
  getUserChoice();
  getHouseChoice();
  winnerGame()
 
});

playAgainButton.addEventListener("click", () => {
  hiddenPanel();
  clearCards();
});


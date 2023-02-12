

const hide = 'none';
const questionMArkSrc = './assets/images/question.png'

const primarySection = document.querySelector(".primary-section");
const secondarySection = document.querySelector(".secondary-section");

const cardElementsChosen = document.querySelectorAll(".card-element");
const cardElementsHouse = Array.from(document.querySelectorAll(".card-element img"));
const pickedCardElements = document.querySelector(".chosen-cards img");
const cardChosen = document.querySelector(".card-picked img");
const cardHouse = document.querySelector(".card-house img");
const rulesModal = document.querySelector(".modal-rules");

const startButton = document.querySelector('#start');
const playAgainButton = document.querySelector("#play-again");
const rulesButton = document.querySelector("#button-rules");
const closeModalbutton = document.querySelector("#fechar");

function handleSelectedCard(){
  const cardSrc = this.children[0].getAttribute("src");
  const cardAlt = this.children[0].getAttribute("alt");

  pickedCardElements.setAttribute('src', cardSrc);
  pickedCardElements.setAttribute('alt', cardAlt);

  startButton.addEventListener('click', ()=>{
    if(pickedCardElements.getAttribute('src') === questionMArkSrc){
      return;
    }
    primarySection.style.display = hide;
    secondarySection.style.display = "grid";

    cardChosen.setAttribute("src", cardSrc);
    cardChosen.setAttribute("alt", cardAlt);
    houseChoice();
  });
}


cardElementsChosen.forEach((cardPicked)=>{
  cardPicked.addEventListener('click', handleSelectedCard)
});

function houseChoice(){
  const numeroAleatorio = parseInt(Math.random() * 5);
  const alt = cardElementsHouse[numeroAleatorio].getAttribute("src")
  cardHouse.setAttribute("src",  alt)
}



playAgainButton.addEventListener('click', ()=>{

  cardChosen.setAttribute('src', questionMArkSrc);
  cardChosen.setAttribute('alt', 'question');

  pickedCardElements.setAttribute('src', questionMArkSrc);
  pickedCardElements.setAttribute('alt', 'question');

  primarySection.style.display = 'flex';
  secondarySection.style.display = hide;
});


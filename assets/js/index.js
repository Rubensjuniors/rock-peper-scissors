const activeClass = "ativo";

const primarySection = document.querySelector(".primary-section");
const secondarySection = document.querySelector(".secondary-section");

const cardElements = document.querySelectorAll(".card-element");
const pickedCardElements = document.querySelectorAll(".selected-card-element");
const cardPickedSelected = document.querySelector(".card-picked");
const rulesModal = document.querySelector(".modal-rules");

const startButton = document.querySelector('#start');
const playAgainButton = document.querySelector("#play-again");
const rulesButton = document.querySelector("#button-rules");
const buttonFecharModal = document.querySelector("#fechar");


function handleCardClick(){
  const cardAlt = this.children[0].getAttribute("alt");
  pickedCardElements.forEach((pickedCard) => {
    pickedCard.classList.remove(activeClass);
    if (cardAlt === pickedCard.getAttribute('id')) {
      pickedCard.classList.add(activeClass);
      cardPickedSelected.innerHTML = pickedCard.innerHTML
    }
  });

}

cardElements.forEach((card) => {
    card.addEventListener('click', handleCardClick);
    card.addEventListener('touchstart', handleCardClick);
    card.addEventListener('mouseover', handleCardClick);

});

startButton.addEventListener("click",()=>{
primarySection.style.display = "none";
secondarySection.style.display = "grid";
})

playAgainButton.addEventListener("click", ()=>{
  primarySection.style.display = "flex";
  secondarySection.style.display = "none";
})

rulesButton.addEventListener("click",()=>{
  rulesModal.style.display = "flex";
})

buttonFecharModal.addEventListener("click",()=>{
  rulesModal.style.display = "none";

})
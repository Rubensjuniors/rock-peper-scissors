const activeClass = "ativo";
const hide = 'none';

const primarySection = document.querySelector(".primary-section");
const secondarySection = document.querySelector(".secondary-section");

const cardElements = document.querySelectorAll(".card-element");
const pickedCardElements = Array.from(document.querySelectorAll(".selected-card-element"));
const cardPickedSelected = document.querySelector(".card-picked");
const rulesModal = document.querySelector(".modal-rules");
const quetionMark = document.querySelector("#quetion");

const startButton = document.querySelector('#start');
const playAgainButton = document.querySelector("#play-again");
const rulesButton = document.querySelector("#button-rules");
const closeModalbutton = document.querySelector("#fechar");

function handleSelectedCard(){
  // variavel que pega os alt dos dos cards
  const cardAlt = this.children[0].getAttribute("alt");

  // loop das lista de imagem escolhidas 
  pickedCardElements.forEach((pickedCard) => {
    // remoce a class ativo pra ficar so um item ativo
    pickedCard.classList.remove(activeClass);

    // if que verifica se os alt das imagems são iguais as dos ids
    if (cardAlt === pickedCard.getAttribute('id')) {
      // add uma class ativo correspondente ao item clicado
      pickedCard.classList.add(activeClass);

      // add o card escolhido na outra parte do game
      cardPickedSelected.innerHTML = pickedCard.innerHTML

      // button de jogar novamente
      playAgainButton.addEventListener("click", ()=>{
        
        // esconde a segunda parte do game e mostra a primeira parte
        primarySection.style.display = "flex";
        secondarySection.style.display = hide;
        
        // remove a class ativo do card escolhido
        pickedCard.classList.remove(activeClass);

        // if que verifica se não esta com ativo e add o question mark novamente e remove o card escolhido 
        if(pickedCard.classList.contains(activeClass) !== activeClass){
          quetionMark.classList.add(activeClass);
          cardPickedSelected.innerHTML = '<img src="" alt="" />'
        }
      });
    }
  });
}
// loop pelas opções dos cards
cardElements.forEach((card) => {
    card.addEventListener('click', handleSelectedCard);
});

// button de start
startButton.addEventListener("click",()=>{
  // if que para se nem um card for escolhido
  if(!cardPickedSelected.children[0].getAttribute("src")){
   return;
  }
  // se card for escolhido esconde primeira parte e mostra a segunda
  primarySection.style.display = hide;
  secondarySection.style.display = "grid";
});

pickedCardElements.forEach((card)=>{
  console.log(Math.random(card) * 5)
})





// button das regras mostra modal
rulesButton.addEventListener("click",()=>{
  rulesModal.style.display = "flex";
});
// button de fechar modal
closeModalbutton.addEventListener("click",()=>{
  rulesModal.style.display = hide;
});

const activeClass = "ativo";
const telaSmall = window.matchMedia("(max-width: 700px)");
const cardElements = document.querySelectorAll(".card-element");
const startButton = document.querySelector('#start');
const pickedCardElements = document.querySelectorAll(".selected-card-element");


function handleCardClick(){
  const cardAlt = this.children[0].getAttribute("alt");
  pickedCardElements.forEach((pickedCard) => {
    pickedCard.classList.remove(activeClass);
    if (cardAlt === pickedCard.getAttribute('id')) {
      pickedCard.classList.add(activeClass);
      console.log(pickedCard)
    }
  });

}

cardElements.forEach((card) => {
  if(telaSmall){
    card.addEventListener('touchstart', handleCardClick);
  }
    card.addEventListener('click', handleCardClick);
    card.addEventListener('mouseover', handleCardClick);

});


console.log(pickedCardElements)

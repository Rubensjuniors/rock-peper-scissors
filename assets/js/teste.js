const classActive = "ativo";
const elementCards = document.querySelectorAll(".card-element");
const buttonStart = document.querySelector('#start');
const elementCardspicked = document.querySelectorAll(".selected-card-element ");

function handleCardClick(){
  const cardImagemAlt = this.children[0].getAttribute("alt");
  elementCardspicked.forEach((cardPicked)=>{
    const teste = cardPicked.getAttribute('id')
    cardPicked.classList.remove("ativo")
    if(cardImagemAlt === teste){
      cardPicked.classList.add("ativo")
      console.log('ppoas')
    }
  });
}

elementCards.forEach((cardElement)=>{
  cardElement.addEventListener('click', handleCardClick)
});

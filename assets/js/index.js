// const classActive = 'ativo';
// const cards = document.querySelectorAll(".ops-item");
// const cardsPickeds = document.querySelectorAll('.ops-card-item img');

// const btnStart = document.querySelector('#start');
// const gameCorpo = document.querySelector(".corpo-game");
// const startGame = document.querySelector(".start-game");

// function pickedCardsClick(){

// function disableCard(cards, index, remove){
//   remove && cards.forEach((content)=>{
//     content.classList.remove(classActive);
//   });

//   cards[index].classList.add(classActive)
// console.log(cards, index, remove)
// }

// function selecionarCard(cardItem, index){
//   cardItem.addEventListener("click", () => {
//     disableCard(cardsPickeds, index, true);
//   });
// }

// cards.forEach(selecionarCard);
// disableCard(cardsPickeds, 5)
// }
// pickedCardsClick();

// function pickedCardsHover(){

// function hoverPicked(event){
// const cards = event.currentTarget.getAttribute("id");

// cardsPickeds.forEach((cardPicked)=>{
//     const alt = cardPicked.getAttribute("alt");
//     cardPicked.classList.remove(classActive);
//     if(cards === alt){
//       cardPicked.classList.add(classActive);
//     }
// });
// }
// cards.forEach((card)=>{
//   card.addEventListener("mouseout", hoverPicked)
// })
// }
// pickedCardsHover();

// function startGameActive(){

// function hiddenPicked(event){
//   gameCorpo.style.display = "none"
//   startGame.style.display = "none"
// }

// btnStart.addEventListener('click', hiddenPicked)
// }
// startGameActive();


const activeClass = 'ativo';
const cardElements = document.querySelectorAll(".ops-item");
const pickedCardImages = document.querySelectorAll('.ops-card-item img');

const startButton = document.querySelector('#start');
const gameBody = document.querySelector(".corpo-game");
const startScreen = document.querySelector(".start-game");

cardElements.forEach((cardElement, index) => {
  cardElement.addEventListener("click", () => {
    pickedCardImages.forEach(img => img.classList.remove(activeClass));
    pickedCardImages[index].classList.add(activeClass);
  });
  cardElement.addEventListener("mouseout", ({ currentTarget }) => {
    const id = currentTarget.getAttribute("id");
    pickedCardImages.forEach(img => {
      if (img.getAttribute("alt") === id) {
        img.classList.add(activeClass);
      } else {
        img.classList.remove(activeClass);
      }
    });
  });
});

startButton.addEventListener('click', () => {
  gameBody.style.display = "none";
  startScreen.style.display = "none";
});

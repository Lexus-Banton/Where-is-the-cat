// import functions and grab DOM elements
const cafeButton = document.getElementById('cafe-button');
const arcadeButton = document.getElementById('arcade-button');
const bookstoreButton = document.getElementById('bookstore-button');

const cafeContainer = document.getElementById('cafe-container');
const arcadeContainer = document.getElementById('arcade-container');
const bookstoreContainer = document.getElementById('bookstore-container');

const winsEl = document.getElementById('wins');
const totalEl = document.getElementById('total');
const lossesEl =document.getElementById('losses');

// let state
const hidingPlaces = ['cafe' , 'arcade' , 'bookstore'];

let correctGuesses = 0;
let totalGuesses =0 ;




// set event listeners

cafeButton.addEventListener('click', () => {
const answer = getRandomItem(hidingPlaces);
  handleGuess(answer, 'cafe');
});

arcadeButton.addEventListener('click', () => {
  const answer = getRandomItem(hidingPlaces);
  handleGuess(answer, 'arcade');
});

bookstoreButton.addEventListener('click', () => {
  const answer = getRandomItem(hidingPlaces);
  handleGuess(answer, 'bookstore');
});

// set reset styles

function resetStyles() {
  cafeContainer.classList.remove('taliah');
  arcadeContainer.classList.remove('taliah');
  bookstoreContainer.classList.remove('taliah');
}
function getRandomItem(array){
  const hidingSpot = Math.floor(Math.random() * array.length);
  const answer = hidingPlaces[hidingSpot];
  return answer;
} 

function handleGuess(correctSpot, userGuess) {
  resetStyles();


  const correctHidingPlaceEl = document.getElementById(`${correctSpot}-container`);
// increment guesses
  totalGuesses++;

const taliah = document.getElementById(`${correctSpot}-container`);
    taliah.classList.add('taliah');

   //if correct
   
   if(userGuess === correctSpot){
    correctGuesses++;
   }

  // update DOM to reflect the new state
  totalEl.textContent = totalGuesses;
  lossesEl.textContent = totalGuesses- correctGuesses;
  winsEl.textContent = correctGuesses;
}

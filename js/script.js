// Creo la const del container e del button reset

const container = document.querySelector('.me-container');
const btnReset = document.getElementById('btn-reset');
let bombs = [];
let gameOver = false;
let clickCounter = 0;

// Aggiungo al bottone l'evento del reset

btnReset.addEventListener('click', function(){
  reset();
  createBombs();
  clickCounter = 0;
  showScore();
  gameOver = false;
})    

// Inserisco i quadrati nel container attraverso la function

for(let i = 1; i <= 100; i++){
  const square = createSquare(i);
  container.append(square);
}

createBombs();





// FUNCTIONS//////////////

// Creo il reset


function reset() {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => square.classList.remove('active', 'lose'));

}

function showScore(){
  let score = document.getElementById('score');
  score.innerHTML = `
  Hai totalizzato ${clickCounter} punti!
  `
}

// Creo la funzione per creare il quadrato

function createSquare(numero){
  const sq = document.createElement('div');
  sq.className = 'square'; 

  sq.addEventListener('click', function(){

    // Dandogli subito il return quando c'è game over ci assicuriamo che non ci siano interazioni

    if (gameOver) return;

    if (isBomb(numero)) {
      // Aggiungiamo la classe lose se clicchiamo la bomba
      this.classList.add('lose');
      gameOver = true;
      revealBombs();
      showScore();

    } else {

      // Aggiungiamo la classe active a ciò che clicchiamo e vediamo tramite la console a che numero corrisponde
    
    this.classList.add('active');
    clickCounter++;
    console.log(numero);
  }
  })
    
  return sq;
  }

function createBombs(){

  // resettiamo l'array

  bombs = [];

  // Finchè l'array bombs non raggiunge 16 numeri genero casualmente 
  while (bombs.length < 16) {
    let randomN = Math.ceil(Math.random() * 100);
    // Se il numero non è già presente lo pusho dentro l'array
    if (!bombs.includes(randomN)) {
      bombs.push(randomN);
    }
  }

  return bombs;
  
}

// Funzione per rivelare le bombe

function revealBombs(){

  // Prendiamo i quadrati

  const squares = document.querySelectorAll('.square');

  // Aggiungiamo la classe lose a tutte le altre caselle che contenevano la bomba
  
  bombs.forEach(bomb => {
    squares[bomb - 1].classList.add('lose');
  });
}

// Creo la funziona per verificare se è una bomba
function isBomb(numero){
  return bombs.includes(numero);
}


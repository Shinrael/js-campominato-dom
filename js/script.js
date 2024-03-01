// Creo la const del container e del button reset

const container = document.querySelector('.me-container');
const btnReset = document.getElementById('btn-reset');
let bombs = [];

// Aggiungo al bottone l'evento del reset

btnReset.addEventListener('click', function(){
  reset();
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
  squares.forEach(square => square.classList.remove('active'));
}

// Creo la funzione per creare il quadrato

function createSquare(numero){
  const sq = document.createElement('div');
  sq.className = 'square'; 

  sq.addEventListener('click', function(){

    if (isBomb(numero)) {
      lose();
    } else {
      // Aggiungiamo la classe active a ciò che clicchiamo e vediamo tramite la console a che numero corrisponde
    
    this.classList.add('active');
    console.log(numero);
  }
  })
    
  return sq;
  }

function createBombs(){
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

// Creo la funziona per verificare se è una bomba
function isBomb(numero){
  return bombs.includes(numero);
}

function lose() {
  const squareL = document.querySelectorAll('.square');

  
}
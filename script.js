let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");
const p = document.createElement("p");

// storing previous guesses in array
let prevGuess = [];

// let guess count starts from one
let numGuess = 1;

// let play game is true
let playGame = true;

// if user is availabel to play game or not
if(playGame){
    submit.addEventListener("click", function(e){
        e.preventDefault();
       const guess = parseInt(userInput.value);
       validateGuess(guess);
      
    })
}

// validating userinput
function validateGuess(guess){
if(isNaN(guess)){
    alert("Please Enter Only Numbers")
}else if(guess < 1){
    alert("Please Enter Numbers Greater Than One");
}else if(guess > 100){
    alert("Please Enter Numbers Lesser Than Hundred");
}else{
    // storing guesses in array.
    prevGuess.push(guess);

    // checking if game is over by numberof guesses more than 11
    if(numGuess === 11){
        displayGuess(guess);
        displayMessage(`GAME OVER. You Guessed it!! Random Number was ${randomNumber}`);
        endGame();
    }else{
        displayGuess(guess)
        checkGuess(guess)
    }
}
    console.log(guess);
}

// checking guess correct or not
function checkGuess(guess){ 
if (guess === randomNumber) {
    displayMessage(`You guessed it right!`)
    endGame();
}else if (guess < randomNumber){
    displayMessage(`Number is too low`)
}else if (guess > randomNumber){
    displayMessage(`number is too high`)
}

}

// displaying guesses
function displayGuess(guess){
    userInput.value = "" 
    guessSlot.innerHTML += `${guess},`
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = "";
    userInput.setAttribute("disabled", "");
    p.classList.add("button");
    p.innerHTML = `<h4 id="newGame">Start New Game</h4>`
    startOver.appendChild(p);
    playGame = false; 
    newGame();
    
}

function newGame(){
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener("click", function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = "";
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute("disabled");
        startOver.removeChild(p); 
        lowOrHi.innerHTML = "";
        playGame = true;
    });
}


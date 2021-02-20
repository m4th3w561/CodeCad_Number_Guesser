let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget(num) {
  num = Math.floor(Math.random() * 10)
  return num
}

function compareGuesses(hum, com, secret) {
    //calling function from the generateTraget to be set to secret
  
  secret = generateTarget();
  
  //console.log(hum, com, secret)
  
    // defining the diferrence between the secret traget number with the players for the difference to be calculated to define the winner for the game. 
  
  let numDifHum = 0;
  let numDifCom = 0;
  numDifHum = getAbsoluteDistance(hum, secret);
  numDifCom = getAbsoluteDistance(com, secret);
  console.log(numDifHum, numDifCom);
  
   //Defining the winner by comparing which is closer to zero or smaller
   
  if (numDifHum > numDifCom || numDifCom === secret) {
    return false 
  } else {
    return true
  };
};

// defining the distance of the inputs to the target 

function getAbsoluteDistance(num1, num2) {
  return Math.abs(num1 - num2);
};

// Updating the score board

function updateScore(str) {
  if (str === 'human') {
    return humanScore += 1
  } 
  if (str === 'computer') {
    return computerScore += 1
  };
};

// Updating the play round

function advanceRound() {
  return currentRoundNumber += 1
} 

// console.log(compareGuesses(2, 7))

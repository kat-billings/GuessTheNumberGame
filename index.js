console.log("Hello!");

const name = prompt("To begin, what's your name?");

console.log("Nice to meet you, " + name + "! \nI'm going to think of a number between 1 and 100. \nGuess a number, and I'll tell you if it's too low or too high. \nWe'll play until you win!");

let isPlaying = true;

while(isPlaying) {
  const num = Math.floor(Math.random() * 100) + 1;
  
  let guess = 0;
  
  let counter = 0;
  
  while(guess != num){
    if (guess != 0) {
      if (guess > num) {
        console.log("Your guess is too high.");
      } else {
        console.log("Your guess is too low.");
      }
    }
    
    let currentGuess = prompt("Guess the number: ");
    
    if (currentGuess > 0 && currentGuess < 101) {
      counter++;
      guess = currentGuess;
    } else {
      console.log("Please enter a number between 1 and 100.");
      guess = 0;
    }
  
    console.log();
  }
  
  console.log(guess + " is correct!");
  
  if (counter == 1) {
    console.log("Congratulations! You won on your first try!");
  } else {
    console.log("It took you " + counter + " guesses to win.");
  }

  let answer = "";

  while (answer.toLowerCase() != "yes" && answer.toLowerCase() != "no") {
    if (answer != "") {
      console.log("Please only enter 'yes' or 'no'.\n");
    }
    answer = prompt("Would you like to play again?");
  }

  if (answer.toLowerCase() == "no") {
    isPlaying = false;
  }

  console.log();
  
}

console.log("Thanks for playing, " + name + "!");
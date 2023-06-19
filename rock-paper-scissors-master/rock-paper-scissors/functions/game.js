let playerScore = 0;
let computerScore = 0;

const choices = {
    "paper": ["rock", "spock"],
    "rock": ["scissors", "lizard"],
    "scissors": ["paper", "lizard"],
    "lizard": ["paper", "spock"],
    "spock": ["rock", "scissors"]
  };

const option = ["rock", "paper", "scissors"];

  function computerChoice() {
   return option[Math.floor(Math.random() * option.length)]; 
  };

  function rockPaperScissors(_player1, _player2) {
    return _player1 === _player2 ? "draw"
        : _player1 in choices && choices[_player1].includes(_player2) ? "player1"
          : "player2";
  };

  
  function replay() {
    let playAgain = String(prompt("Would you like to play again?").toLowerCase());
    if (playAgain === "yes"){
      playGame();
    } else {
      if (playerScore === computerScore) {
        console.log(`It was a draw.`);
      } else if (playerScore > computerScore) {
        console.log(`You scored ${playerScore}. You win!`);
      } else {
        console.log(`Computer wins.`);
      }
    }
  }

  export {rockPaperScissors , computerChoice};

    let choices = ['Rock', 'Paper', 'Scissors']

function computerPlay () {

    let random  = Math.floor(Math.random() * 3)
       
       return choices[random]
}

function checkIfWon(player, computer) {
    if (player == 'Rock' && computer == 'Scissors') {
        return 'Player Wins!'
    }
    if (player == 'Scissors' && computer == 'Paper') {
        return 'Player Wins!'
    }
    if (player == 'Paper' && computer == 'Rock') {
        return 'Player Wins!'
    }
    if (player == 'Rock' && computer == 'Rock') {
        return 'Tie!'
    }

    if (player == 'Paper' && computer == 'Paper') {
        return 'Tie!'
    }

    if (player == 'Scissors' && computer == 'Scissors') {
        return 'Tie!'
    }

    else {
        return "Computer Wins"
    }
    
    

}


function playGame() {
   let playerChoice = prompt("Choose Rock Paper or Scissors")

   let computerChoice = computerPlay()

    console.log("Player chose: " + playerChoice + " Computer chose: " + computerChoice )

    alert(checkIfWon(playerChoice, computerChoice))


}

playGame()
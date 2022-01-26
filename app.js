

    let rock = document.getElementById('rock')
    let paper = document.getElementById('paper')
    let scissors = document.getElementById('scissors')

    let playerScore = 0;
    let computerScore =0;

    let headText = document.querySelector('h1')

    let choiceText = document.querySelector('.choice')

    let resultText = document.querySelector('.result')

   

function computerPlay () {
    let choices = ['Rock', 'Paper', 'Scissors']

    let random  = Math.floor(Math.random() * 3)
       
       return choices[random]
}

function playGame(playerChoice) {

    let computerChoice = computerPlay()
    
     choiceText.innerHTML = "Player chose: <div style='color: white;'>" + playerChoice + "</div>  Computer chose:  <div style='color: white;'>" + computerChoice + "</div>"
 
     resultText.innerHTML = checkIfWon(playerChoice, computerChoice)

     headText.innerHTML =  "Player: "  + playerScore + " Computer " + computerScore

     if (playerScore == 5) {
        headText.innerHTML = 'You Win!!'
        playerScore = 0
        computerScore =0
     }
     if (computerScore ==5) {
        headText.innerHTML = 'You Lose! :('
        playerScore = 0
        computerScore =0

     }



 }
 

function checkIfWon(player, computer) {


    if (player == 'Rock' && computer == 'Scissors') {
        playerScore++
        return 'Player Wins!'

    }
    if (player == 'Scissors' && computer == 'Paper') {
        playerScore++
        return 'Player Wins!'
    }
    if (player == 'Paper' && computer == 'Rock') {
        playerScore++
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
        computerScore++
        return "Computer Wins"
    }
    
}



rock.addEventListener( 'click', () => {
  let  choice = 'Rock'
    playGame(choice)
})

paper.addEventListener('click', () => {
  let  choice = 'Paper'
      playGame(choice)

})

scissors.addEventListener( 'click', () => {
  let  choice = 'Scissors'
      playGame(choice)
})




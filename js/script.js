'use strict'

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let highscore = 0

const displayMessage = function(message){
    document.querySelector('.message').textContent = message
}


// check button
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value)

    // when there is no input
    if(!guess){
        displayMessage('⛔ No number!')

    //when player wins
    }else if(guess === secretNumber){
        displayMessage('🎉 Correct number!')

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = secretNumber

        //changing highscore
        if(score > highscore){
            highscore = score
            document.querySelector('.highscore').textContent = highscore
        }


    // when guess is wrong
    } else if(guess !== secretNumber){
        if(score > 1){
            // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high!' : '📉 Too low!'
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!')
            
            score--
            document.querySelector('.score').textContent = score
        }else{
            displayMessage('😓 You lost the game')
            document.querySelector('.score').textContent = 0
        }
    }
})

// again button
document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1
    score = 20

    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.score').textContent = score
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = ''
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
})
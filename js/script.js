'use strict'

let secretNumber = Math.trunc(Math.random() * 20) + 1
// document.querySelector('.number').textContent = secretNumber

let score = 20

// check button
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value)

    // when there is no input
    if(!guess){
        document.querySelector('.message').textContent = '⛔ No number!'
    
    //when player wins
    }else if(guess === secretNumber){
        document.querySelector('.message').textContent = '🎉 Correct number!'
    
        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = secretNumber


    // when gess is too high
    }else if(guess > secretNumber){

        if(score > 1){
            document.querySelector('.message').textContent = '📈 Too high!'
            score--
            document.querySelector('.score').textContent = score
        }else{
            document.querySelector('.message').textContent = '😓 You lost the game'
            document.querySelector('.score').textContent = 0
        }
    
    // when gess is too low
    }else if(guess < secretNumber){

        if(score > 1){
            document.querySelector('.message').textContent = '📉 Too low!'
            score--
            document.querySelector('.score').textContent = score
        }else{
            document.querySelector('.message').textContent = '😓 You lost the game' 
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
    document.querySelector('.guess').textContent = ''
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
})
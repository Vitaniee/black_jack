/*
 * @Description: 
 * @Author: Xinyue Cao
 * @Date: 2023-02-10 06:32:52
 * @LastEditTime: 2023-02-13 09:43:58
 * @LastEditors: Xinyue Cao
 */
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let INI = 150
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let player = {
    name: "Your Chips",
    chips: INI
}
playerEl.textContent = player.name + ": $"+player.chips

function getRandomCard() {
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}

function startGame() {
    if (player.chips>=5){
        isAlive = true
        hasBlackJack = false
        cards = [getRandomCard(), getRandomCard()]
        sum = cards[0] + cards[1]
        player.chips -=5
        renderGame()
    }
    else {
        lose()
    }
}
function lose(){
    cardsEl.textContent = ""
    sumEl.textContent = ""
    messageEl.textContent = "YOU LOSE!!"

}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        player.chips +=100
    } else {
        message = "You're out of the game!"
        isAlive = false
        player.chips -=20
    }
    messageEl.textContent = message
    playerEl.textContent = player.name + ": $"+player.chips
}


function newCard() {
    if (isAlive && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }

}

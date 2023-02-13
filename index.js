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
    name: "Vitanie",
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
    isAlive = true
    hasBlackJack = false
    cards = [getRandomCard(), getRandomCard()]
    sum = cards[0] + cards[1]
    player.chips -=5
    renderGame()

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

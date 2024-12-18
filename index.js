

let cards = []

let sum = 0
let hasBlackJack = false
let isAlive = false
let gameStart = false

let message = ""

function getRandom()
{
    let num =  Math.floor(Math.random() * 13) + 1
    if(num === 1)
    {
        return 11
    }
    else if (num > 10)
    {
        return 10
    }
    else
    {
        return num
    }
}

function startGame()
{
    if (gameStart===false)
    {
        gameStart = true
        console.log(gameStart)
        isAlive = true
        let firstCard = getRandom()
        let secondCard = getRandom()
        cards.push(firstCard)
        cards.push(secondCard)
        sum = sum + cards[0] + cards[1]
        renderGame()
    }
}

function renderGame()
{
    if (sum<21){
        message = "Do you want to draw another card?"
    }
    else if(sum===21){
        message = "You've got blackjack!"
        hasBlackJack = true
    }
    else{
        message = "You're out of the game!"
        isAlive = false
    }
    document.querySelector("#cards").textContent = "Cards: "
    for (let i = 0; i<cards.length; i++)
    {
        document.querySelector("#cards").textContent += cards[i] + " "
    }
    document.querySelector("#message").textContent = message
    document.getElementById("sum").textContent = "Sum: " + sum
}

function newCard()
{
    if (isAlive===true && hasBlackJack==false)
    {
        let newCard = getRandom()
        sum += newCard
        cards.push(newCard)
        renderGame()
    }
}
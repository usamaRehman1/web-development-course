const firstName = document.querySelector(".player1-name");
const secondName = document.querySelector(".player2-name");
let playerTurn = true; // true for player 1 turn and false for player 2 turn
// ----------------- dice Image --------------------
const diceImg = document.querySelector("#diceImg");
// ----------- player total score ----------------
const playerTotalScore = document.querySelectorAll(".player-total-score");
// ---------------- current Score -------------
const currScore = document.querySelectorAll(".currScore");
// -------------- roll Dice -------------------
const rollDice = document.querySelector("#rollDice");
//--------------- hold Dice --------------------
const holdDice = document.querySelector("#holdDice");
// ---------------- Winning Score --------------
const winningScore = 100;

// ----------------- player container ----------------------
const player1Container = document.querySelector("#player1-container")
const player2Container = document.querySelector("#player2-container")

// ---------------- player Name -------------------
let player1Name, player2Name;

window.onload = () => {
    player1Name = prompt("Enter First Player Name:");
    player2Name = prompt("Enter Second Player Name:");

    if (player1Name.trim() == "" || player2Name.trim() == "") {
        alert("please enter a valid name")
        window.onload()
    }

    firstName.textContent = `${player1Name.slice(0, 1).toUpperCase()}${player1Name.slice(1).toLowerCase()}`
    secondName.textContent = `${player2Name.slice(0, 1).toUpperCase()}${player2Name.slice(1).toLowerCase()}`

    // reset all values
    playerTotalScore[0].textContent = 0;
    playerTotalScore[1].textContent = 0;
    currScore[0].textContent = 0;
    currScore[1].textContent = 0;
    playerTurn = true
}

const playerHoldHandler = (userIndex, changePLayerTurn, winningPlayerName, losingPlayerName ) => {
    playerTotalScore[userIndex].textContent = Number(playerTotalScore[userIndex].textContent) + Number(currScore[userIndex].textContent)

    if (Number(playerTotalScore[userIndex].textContent) >= winningScore) {
        alert(`${winningPlayerName.slice(0, 1).toUpperCase()}${winningPlayerName.slice(1)} won the game`);
        let winUsersObj = { winner: winningPlayerName, loser: losingPlayerName, score: playerTotalScore[userIndex].textContent }
        let getDataFromLocalStorage = JSON.parse(localStorage.getItem("winningUsers")) || []; 
        localStorage.setItem("winningUsers", JSON.stringify([...getDataFromLocalStorage, winUsersObj]) )
        playerTotalScore[0].textContent = 0;
        playerTotalScore[1].textContent = 0;
        currScore[0].textContent = 0;
        currScore[1].textContent = 0;
    } else {
        currScore[userIndex].textContent = 0
        playerTurn = changePLayerTurn
        player1Container.classList.toggle("active")
        player2Container.classList.toggle("active")
    }
}

rollDice.addEventListener("click", () => {
    let generateRandomNum = Math.ceil(Math.random() * 6);
    diceImg.src = `./assets/${generateRandomNum}.webp`

    if (playerTurn) {
        if (generateRandomNum != 1) {
            currScore[0].textContent = Number(currScore[0].textContent) + generateRandomNum;
        } else {
            currScore[0].textContent = 0;
            playerTurn = !playerTurn
            player1Container.classList.toggle("active")
            player2Container.classList.toggle("active")
        }
    } else {
        if (generateRandomNum != 1) {
            currScore[1].textContent = Number(currScore[1].textContent) + generateRandomNum;
        } else {
            currScore[1].textContent = 0;
            playerTurn = !playerTurn
            player1Container.classList.toggle("active")
            player2Container.classList.toggle("active")
        }
    }
})

holdDice.addEventListener("click", () => {
    if (playerTurn) {
        playerHoldHandler(0, !playerTurn, player1Name, player2Name)
    } else {
        playerHoldHandler(1, !playerTurn, player2Name, player1Name)
    }
})
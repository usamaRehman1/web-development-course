// ---------------------------- counter ------------------------

const counterDisplay = document.getElementById("counter-display");
const roundDisplay = document.getElementById("round-display");
const decrementBtn = document.getElementById("decrement-btn");
const incrementBtn = document.getElementById("increment-btn");
const resetBtn = document.getElementById("reset-btn");

let incCountTenRound = 0, decCountTenRound = 0;

incrementBtn.addEventListener("click", () => {
    ++counterDisplay.innerText
    ++incCountTenRound;

    if (incCountTenRound > 9) {
        incCountTenRound = 0
        ++roundDisplay.textContent
    }

})

decrementBtn.addEventListener("click", () => {
    --counterDisplay.innerText
    decCountTenRound = (+counterDisplay.textContent % 10) + 1
    --decCountTenRound
    console.log(decCountTenRound)
    
    if (decCountTenRound < 1) {
        console.log("dec")
        decCountTenRound = 0
        --roundDisplay.textContent
    }

    if (+counterDisplay.textContent < 0) {
        counterDisplay.innerText = 0
        roundDisplay.textContent = 0
    }
})

resetBtn.addEventListener("click", () => {
    counterDisplay.textContent = 0
    roundDisplay.textContent = 0
})

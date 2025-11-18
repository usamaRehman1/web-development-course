window.onload = () => {
    const getUsers = JSON.parse(localStorage.getItem("winningUsers"))
    console.log("window loaded", getUsers)

    if (getUsers.length <= 0) return

    if (getUsers) {
        console.log("user mil gaya")

        let ul = document.querySelector("#record-list");
        getUsers.forEach(element => {
            let {winner, loser, score} = element
            let li = document.createElement("li");
            let liText = document.createTextNode(`${winner} won the game from ${loser} by scoring ${score}.`)
            li.appendChild(liText)
            ul.append(li)
        });
    }
    
}
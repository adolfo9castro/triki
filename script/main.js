let triki = [[], [], []]
const players = ["O", "X"]
let turn = 0
let sendGame = (data) => {
    let player = players[turn]
    console.log(`Juega: ${player}`)
    let x = data.target.classList[1]
    let y = data.target.classList[2] ? data.target.classList[2] : x
    let val = data.data.toUpperCase() || ""
    let next = validateVal(val, player)
    if (next) {
        for (let i = 0; i <= triki.length; i++) {
            for (let j = 0; j <= triki[x].length; j++) {
                triki[x][y] = val
            }
        }
        win(triki)
        turn = turn >= 1 ? 0 : +1
    }
    else {
        data.value = ""
        alert(`Es el turno de: ${player}`)
    }
}
let validateVal = (val, player) => {
    return val === player ? true : false
}
let win = (triki) => {
    //TODO
    triki.forEach(e => {
        for (let i = 0; i < e.length; i++) {
            if (i >= 2) {
                if (e[i - 2] === e[i - 1] && e[i - 1] === e[i]) console.log('gano por el foreach');
            }
        }
        for (let k = 0; k < e.length; k++) {
            console.log(e[k])
            if (e[k - 2] === e[k - 1] && e[k - 1] === e[k]) console.log('gano por el for');
        }
    });
    /* for (let i = 0; i < triki.length; i++) {
        
    } */
}
(function () {
    let e = document.getElementById("inputs")
    e.addEventListener("input", sendGame, false)
}())
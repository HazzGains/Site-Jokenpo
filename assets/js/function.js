function playRound() {
    const computerSelection = getComputerChoice();

    let historico = document.getElementById("position");
    let historicoCreate = document.createElement("p");
    document.body.insertAdjacentElement("afterend",historicoCreate, historico)

    if ((player == "ROCK" && computerSelection === "PAPER") || 
    (player == "PAPER" && computerSelection === "SCISSOR") ||
    (player == "SCISSOR" && computerSelection === "ROCK")) {
        resposta.textContent = `Player uses ${player} and Computer uses ${computerSelection}... Computer Wins!`
        
        placarComputer = placarComputer + 1
        placar.textContent = `Histórico - Player ${placarPlayer} VS ${placarComputer} Computer`
        
        let conteudo = document.createTextNode("Computer Wins!");
        historicoCreate.appendChild(conteudo)

    } else if ((player == "ROCK" && computerSelection === "ROCK") ||
    (player == "PAPER" && computerSelection === "PAPER") ||
    (player == "SCISSOR" && computerSelection === "SCISSOR") ) {
        resposta.textContent = `Player uses ${player} and Computer uses ${computerSelection}... Draw!!!`
       
        let conteudo = document.createTextNode("Draw!!!");
        historicoCreate.appendChild(conteudo)

    } else if ((player == "ROCK" && computerSelection === "SCISSOR") || 
    (player == "PAPER" && computerSelection === "ROCK") ||
    (player == "SCISSOR" && computerSelection === "PAPER")) {
        resposta.textContent = `Player uses ${player} and Computer uses ${computerSelection}... Player Wins! `
       
        placarPlayer = placarPlayer + 1
        placar.textContent = `Histórico - Player ${placarPlayer} VS ${placarComputer} Computer`

        let conteudo = document.createTextNode("Player Wins!");
        historicoCreate.appendChild(conteudo)
    } else if (player === "CERTO") {
        resposta.textContent = "TA ACHANDO QUE É O PATATI PATATA FELA DA PUTA"
    } else {
        resposta.textContent = "VAI SE FUDE MANO, DIGITA 'CERTO' "
    }
}

function getComputerChoice() {
    first = 0
    last = game.length
    return game[Math.floor(Math.random() * (last - first))]
}

function myValue() {
    return player = this.value.toUpperCase()
}

const input = document.getElementById("player")
let player =  input.addEventListener("input", myValue);
const btn = document.getElementById("btn");
const resposta = document.getElementById("resposta");

let placar = document.getElementById("placar");
let placarComputer = 0
let placarPlayer = 0

const game = ["ROCK", "PAPER", "SCISSOR"];

const result = btn.addEventListener("click", playRound)
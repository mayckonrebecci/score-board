const ptBrFlag = document.querySelector("#portuguese-lang");
const engUkFlag = document.querySelector("#english-lang");
const scoreBoardTitle = document.querySelector(".board-title");
const labelPointsToWin = document.querySelector(".label");
const playerHome = document.querySelector(".home");
const playerAway = document.querySelector(".away");
const htmlLang = document.querySelector("html");

ptBrFlag.addEventListener("click", function(){
    scoreBoardTitle.innerText = "PLACAR";
    labelPointsToWin.innerText = "PONTOS PARA VENCER:";
    playerHome.innerText = "CASA";
    playerAway.innerText = "FORA";
    homePlayer.button.innerText = "CASA +1";
    awayPlayer.button.innerText = "FORA +1";
    btnReset.innerText = "RESETAR";
    htmlLang.lang = "pt-br";
})

engUkFlag.addEventListener("click", function(){
    scoreBoardTitle.innerText = "SCORE BOARD";
    labelPointsToWin.innerText = "POINTS TO WIN:";
    playerHome.textContent = "HOME";
    playerAway.innerText = "AWAY";
    homePlayer.button.innerText = "HOME +1";
    awayPlayer.button.innerText = "AWAY +1";
    btnReset.innerText = "RESET";
    htmlLang.lang = "en";
})

const btnReset = document.querySelector(".btn-reset");
const playTo = document.querySelector("#playto");

const homePlayer = {
    score: 1,
    button: document.querySelector(".btn-p1"),
    display: document.querySelector(".score-p1"),
    displayColor: document.querySelector(".score-bkg1")
}

const awayPlayer = {
    score: 1,
    button: document.querySelector(".btn-p2"),
    display: document.querySelector(".score-p2"),
    displayColor: document.querySelector(".score-bkg2")
}

let max_point = 3;
let isGameOver = false;

playTo.addEventListener("change", function() {
    max_point = Number(this.value);
    reset();
});

const updateScore = (player, opponent) => {
    if (!isGameOver) {
        player.display.innerText = player.score++;
        if(player.score === max_point + 1) {
            isGameOver = true;
            player.button.disabled = true;
            opponent.button.disabled = true;
            player.displayColor.classList.add("has-background-success");
            opponent.displayColor.classList.add("has-background-danger");           
        }
    }
}

homePlayer.button.addEventListener("click", function() {
    updateScore(homePlayer, awayPlayer);
})

awayPlayer.button.addEventListener("click", function() {
    updateScore(awayPlayer, homePlayer);
})

const reset = () => {
    isGameOver = false;

    for (let p of [homePlayer, awayPlayer]) {
        p.display.innerText = 0;
        p.score = 1;
        p.button.disabled = false;
        p.displayColor.classList.remove("has-background-success", "has-background-danger");
    }
};

btnReset.addEventListener("click", reset);
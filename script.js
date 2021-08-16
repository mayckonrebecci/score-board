const ptBrFlag = document.querySelector("#portuguese-lang");
const engUkFlag = document.querySelector("#english-lang");
const scoreBoardTitle = document.querySelector(".board-title");
const labelPointsToWin = document.querySelector(".label");
const playerHome = document.querySelector(".home");
const playerAway = document.querySelector(".away");

const scoreBoardP1 = document.querySelector(".score-bkg1");
const scoreBoardP2 = document.querySelector(".score-bkg2");
const scoreP1 = document.querySelector(".score-p1");
const scoreP2 = document.querySelector(".score-p2");
const btnP1 = document.querySelector(".btn-p1");
const btnP2 = document.querySelector(".btn-p2");
const btnReset = document.querySelector(".btn-reset");
const playTo = document.querySelector("#playto");

ptBrFlag.addEventListener("click", function(){
    scoreBoardTitle.innerText = "PLACAR";
    labelPointsToWin.innerText = "PONTOS PARA VENCER:";
    playerHome.innerText = "CASA";
    playerAway.innerText = "FORA";
    btnP1.innerText = "CASA +1";
    btnP2.innerText = "FORA +1";
    btnReset.innerText = "RESETAR";
})

engUkFlag.addEventListener("click", function(){
    scoreBoardTitle.innerText = "SCORE BOARD";
    labelPointsToWin.innerText = "POINTS TO WIN:";
    playerHome.textContent = "HOME";
    playerAway.innerText = "AWAY";
    btnP1.innerText = "HOME +1";
    btnP2.innerText = "AWAY +1";
    btnReset.innerText = "RESET";
})

let p1_point = 1;
let p2_point = 1;
let max_point = 3;
let isGameOver = false;

playTo.addEventListener("change", function() {
    max_point = Number(this.value);
    reset();
});

btnP1.addEventListener("click", function(){
    if (!isGameOver) {
        scoreP1.innerText = p1_point++;
        if(p1_point === max_point + 1) {
            isGameOver = true;
            btnP1.disabled = true;
            btnP2.disabled = true;
            scoreBoardP1.classList.add("has-background-success");
            scoreBoardP2.classList.add("has-background-danger");
        }
    }
})

btnP2.addEventListener("click", function(){
    if (!isGameOver){
        scoreP2.innerText = p2_point++;
        if(p2_point === max_point +1 ){
            isGameOver = true;
            btnP1.disabled = true;
            btnP2.disabled = true;
            scoreBoardP2.classList.add("has-background-success");
            scoreBoardP1.classList.add("has-background-danger");
        }
    }
})


const reset = () => {
    scoreP1.innerText = 0;
    scoreP2.innerText = 0;
    p1_point = 1;
    p2_point = 1;
    isGameOver = false;
    btnP1.classList.add("is-info");
    btnP2.classList.add("is-warning")
    btnP1.disabled = false;
    btnP2.disabled = false;
    scoreBoardP1.classList.remove("has-background-success", "has-background-danger");
    scoreBoardP2.classList.remove("has-background-success", "has-background-danger"); 
};


btnReset.addEventListener("click", reset);
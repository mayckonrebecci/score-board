const scoreBoardP1 = document.querySelector(".score-bkg1");
const scoreBoardP2 = document.querySelector(".score-bkg2");
const scoreP1 = document.querySelector(".score-p1");
const scoreP2 = document.querySelector(".score-p2");
const btnP1 = document.querySelector(".btn-p1");
const btnP2 = document.querySelector(".btn-p2");
const btnReset = document.querySelector(".btn-reset");
const playTo = document.querySelector("#playto");

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
            btnP1.style.backgroundColor = "#5f5e5e";
            btnP2.style.backgroundColor = "#5f5e5e";
            scoreBoardP1.style.backgroundColor = "#859c1f";
            scoreBoardP2.style.backgroundColor = "#ff1f1f";
        }
    }
})

btnP2.addEventListener("click", function(){
    if (!isGameOver){
        scoreP2.innerText = p2_point++;
        if(p2_point === max_point +1 ){
            isGameOver = true;
            btnP1.style.backgroundColor = "#5f5e5e";
            btnP2.style.backgroundColor = "#5f5e5e";
            scoreBoardP2.style.backgroundColor = "#859c1f";
            scoreBoardP1.style.backgroundColor = "#ff1f1f";
        }
    }
})


const reset = () => {
    scoreP1.innerText = 0;
    scoreP2.innerText = 0;
    p1_point = 1;
    p2_point = 1;
    isGameOver = false;
    btnP1.style.backgroundColor = "";
    btnP2.style.backgroundColor = "";
    scoreBoardP2.style.backgroundColor = "";
    scoreBoardP1.style.backgroundColor = "";   
};


btnReset.addEventListener("click", reset);
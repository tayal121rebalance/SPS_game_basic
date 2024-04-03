let userScore = 0;
let CompScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencomputerchoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const draw = () => {
    console.log("game draw");
    msg.innerText = "game was draw , play again !";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin,userChoice,computerChoice) => {
    if(userWin){
        userScore++;
        userScorepara.innerText = `${userScore}`;
        console.log("you win");
        msg.innerText = `you win ! ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    }
       
    else { 
        CompScore++;
        compscorepara.innerText = `${CompScore}`;
        console.log("you lose");
        msg.innerText = `you lose ! ${computerChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};


const playGame = (userChoice) => {
    console.log(userChoice);
    // generate computer choice
    const computerChoice = gencomputerchoice();
    console.log(computerChoice);

    if(userChoice === computerChoice){
        draw();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
          userWin =  computerChoice ==="paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = computerChoice === "scissor" ? false : true;
        }
        else { 
            userWin = computerChoice === "stone" ? false : true;
        }
        showWinner(userWin,userChoice,computerChoice);
    }

};

choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click", ()=> {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
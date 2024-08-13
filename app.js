let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="game was draw.play again";
    msg.style.backgroundColor=" #081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        console.log("you win");
        userscore++
        userScorePara.innerText=userscore;
        msg.innerText=`you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        console.log("you lose");
        compscore++
        compScorePara.innerText=compscore;
        msg.innerText=`you lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const playGame= (userChoice) =>{
    console.log("userChoice=",userChoice);
    //Generate computer choice
    const compChoice=genCompChoice();
    console.log("compChoice=",compChoice);

    if(userChoice===compChoice){
        //draw game
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissor,paper
           userWin= compChoice==="paper"? false:true;
        }else if(userChoice==="paper"){
            //rock,scissor
            userWin=compChoice==="scissors"?false:true;
        }else{
            //rock,paper
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",() => {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
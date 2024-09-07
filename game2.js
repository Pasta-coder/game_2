let humanScore=document.querySelector("#human-score");
let computerScore=document.querySelector("computer-score");

const choices=document.querySelectorAll(".choices");

const playGame =()=>{
    console.log("user choice =",userChoice);
}

const generateComputerChoice =()=>{
    const options =["rock","paper","scissors"];
    Math.floor(Math.random()*3);
}

choices.forEach((choice)=>{
    //console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
}); 
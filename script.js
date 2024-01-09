let userScore = 0;
let compScore = 0;



let darwGame = () => {

    document.getElementById("message").innerHTML = "Game Draw! Play Again";
    document.querySelector(".masg-contuner").style.backgroundColor = "#081b31";
    document.getElementById("message").style.color = "white";
}
const choices = document.querySelectorAll(".choose");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const showWinner = (userWin) => {
    if (userWin == true) {
        userScore++;
        document.getElementById("user-score").innerHTML = userScore;
        document.getElementById("message").innerHTML = "You win";
        document.querySelector(".masg-contuner").style.backgroundColor = "green";
        document.getElementById("message").style.color = "white";

    }
    else {

        compScore++;
        document.getElementById("comp-score").innerHTML = compScore;
        document.getElementById("message").innerHTML = "Computer Win";
        document.querySelector(".masg-contuner").style.backgroundColor = "red";
        document.getElementById("message").style.color = "white";
    }
}
const playGame = (userChoose) => {
    console.log("User Choose =", userChoose);
    const compChoose = genCompChoice();
    console.log("Compter Choose =", compChoose);

    if (userChoose === compChoose) {
        darwGame();
    }
    else {
        let userWin = true;
        if (userChoose === "rock") {
            userWin = compChoose === "paper" ? false : true;
        }
        else if (userChoose === "paper") {
            userWin = compChoose === "scissor" ? false : true;
        }
        else {
            userWin = compChoose === "rock" ? false : true;
        }
        showWinner(userWin);
    };
};

choices.forEach((choose) => {

    choose.addEventListener("click", () => {
        let userChoose = choose.getAttribute("id")


        playGame(userChoose);
    });
});



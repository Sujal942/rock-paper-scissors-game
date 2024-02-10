let choice = document.querySelectorAll(".choice");
let userScore = 0;
let computerScore = 0;
let move = document.getElementById("move");
let user = document.getElementById("user");
let comp = document.getElementById("comp");

const draw = () => {
  console.log("Game is Draw");
};

const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    user.innerHTML = userScore;
    console.log("you Win");
    move.innerText = "USER WINS";
    move.style.backgroundColor = "green";
    move.style.color = "white";
  } else {
    computerScore++;
    comp.innerText = computerScore;
    console.log("you lose");
    move.innerText = "COMPUTER WINS";
    move.style.backgroundColor = "red";
    move.style.color = "white";
  }
};

let score = () => {};

const compChoice = (id) => {
  let options = ["rock", "paper", "scissors"];
  let result = Math.floor(Math.random() * 3);
  //   console.log("computer choice", result.valueOf(options));
  return options[result];
};

const userChoice = (id) => {
  console.log("user choice", id);
  const cChoice = compChoice();
  console.log("Computer Choose", cChoice);

  if (id === cChoice) {
    draw();
    move.innerText = "OHH! MATCH IS DRAW";
    move.style.backgroundColor = "purple";
    move.style.color = "white";
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // scissors, paper
      userWin = cChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // rock, scissors
      (userWin == cChoice) === "scisscors" ? false : true;
    } else {
      // paper, rock
      userWin = cChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

choice.forEach((choice) => {
  //   console.log(choice);
  choice.addEventListener("click", () => {
    const id = choice.getAttribute("id");
    // console.log(id, "was clicked");
    userChoice(id);
    compChoice(id);
  });
});

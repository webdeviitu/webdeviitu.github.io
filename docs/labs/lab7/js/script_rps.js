function computer_choice() {
    let comp_choice = Math.floor(Math.random() * 4) + 1;
    return comp_choice;
}

//1 - rock, 2 - paper, 3 - scissors

let rounds = [];

let user_score = {
    nickname: "default",
    score: "0"
}

let user_win = 0;
let comp_win = 0;
let no_one = 0;

function check(user_choice) {
    var comp = computer_choice();

    var pgif = document.getElementById("playergif");
    var cgif = document.getElementById("compgif");

    switch(user_choice) {
        case 1:
            if (comp == 1) {
                no_one += 1;
                rounds.push('Player: Rock\nComputer: Rock\nWon: No one')
                document.getElementById('playerchoice').innerHTML = "Rock";
                document.getElementById('compchoice').innerHTML = "Rock";
                document.getElementById('result').innerHTML = "No one win!";
                pgif.innerHTML = "<img src='img/rps/player-rock_win.gif'>";
                cgif.innerHTML = "<img src='img/rps/comp-rock_win.gif'>";
            }

            else if (comp == 2) {
                comp_win +- 1;
                rounds.push('Player: Rock\nComputer: Paper\nWon: Computer')
                document.getElementById('playerchoice').innerHTML = "Rock";
                document.getElementById('compchoice').innerHTML = "Paper";
                document.getElementById('result').innerHTML = "Computer win!";
                pgif.innerHTML = "<img src='img/rps/player-rock_loose.gif'>";
                cgif.innerHTML = "<img src='img/rps/comp-paper_win.gif'>";
            }

            else if (comp == 3) {
                user_win += 1;
                rounds.push('Player: Rock\nComputer: Scissors\nWon: Player')
                document.getElementById('playerchoice').innerHTML = "Rock";
                document.getElementById('compchoice').innerHTML = "Scissors";
                document.getElementById('result').innerHTML = "You win!";
                pgif.innerHTML = "<img src='img/rps/player-rock_win.gif'>";
                cgif.innerHTML = "<img src='img/rps/comp-scissors_loose.gif'>";
            }


        case 2:
            if (comp == 1) {
                user_win += 1;
                rounds.push('Player: Paper\nComputer: Rock\nWon: Player')
                document.getElementById('playerchoice').innerHTML = "Paper";
                document.getElementById('compchoice').innerHTML = "Rock";
                document.getElementById('result').innerHTML = "You win!";
                pgif.innerHTML = "<img src='img/rps/player-paper_win.gif'>";
                cgif.innerHTML = "<img src='img/rps/comp-rock_loose.gif'>";
            }

            else if (comp == 2) {
                no_one +- 1;
                rounds.push('Player: Paper\nComputer: Paper\nWon: No one')
                document.getElementById('playerchoice').innerHTML = "Paper";
                document.getElementById('compchoice').innerHTML = "Paper";
                document.getElementById('result').innerHTML = "No one win!";
                pgif.innerHTML = "<img src='img/rps/player-paper_win.gif'>";
                cgif.innerHTML = "<img src='img/rps/comp-paper_win.gif'>";
            }

            else if (comp == 3) {
                comp_win += 1;
                rounds.push('Player: Paper\nComputer: Scissors\nWon: Computer')
                document.getElementById('playerchoice').innerHTML = "Paper";
                document.getElementById('compchoice').innerHTML = "Scissors";
                document.getElementById('result').innerHTML = "Computer win!";
                pgif.innerHTML = "<img src='img/rps/player-paper_loose.gif'>";
                cgif.innerHTML = "<img src='img/rps/comp-scissor_win.gif'>";
            }


        case 3:
            if (comp == 1) {
              comp_win += 1;
              rounds.push('Player: Scissors\nComputer: Rock\nWon: Computer')
              document.getElementById('playerchoice').innerHTML = "Scissors";
                document.getElementById('compchoice').innerHTML = "Rock";
                document.getElementById('result').innerHTML = "Computer win!";
                pgif.innerHTML = "<img src='img/rps/player-scissors_loose.gif'>";
                cgif.innerHTML = "<img src='img/rps/comp-rock_win.gif'>";
            }
    
            else if (comp == 2) {
                user_win += 1;
                rounds.push('Player: Scissors\nComputer: Paper\nWon: Player')
                document.getElementById('playerchoice').innerHTML = "Scissors";
                document.getElementById('compchoice').innerHTML = "Paper";
                document.getElementById('result').innerHTML = "You win!";
                pgif.innerHTML = "<img src='img/rps/player-scissors_win.gif'>";
                cgif.innerHTML = "<img src='img/rps/comp-paper_loose.gif'>";
            }
    
            else if (comp == 3) {
                no_one += 1;
                rounds.push('Player: Scissors\nComputer: Scissors\nWon: No one')
                document.getElementById('playerchoice').innerHTML = "Scissors";
                document.getElementById('compchoice').innerHTML = "Scissors";
                document.getElementById('result').innerHTML = "No one win!";
                pgif.innerHTML = "<img src='img/rps/player-scissors_win.gif'>";
                cgif.innerHTML = "<img src='img/rps/comp-scissors_win.gif'>";
            }
            
    }
}

function end() {
    alert(`Total number of rounds: ${user_win+comp_win+no_one}\nWon rounds: ${user_win}\nLoose rounds: ${comp_win}\nNo one won rounds: ${no_one}`);
}
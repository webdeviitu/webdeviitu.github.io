function createNewNum() {
    let computersNumber = Math.floor(Math.random() * 1000) + 1;
    computersNumber = String(computersNumber);
    return computersNumber;
}

let correctNum = createNewNum();
document.getElementById('correctnum').innerHTML = correctNum;
let attempts = [];

function userGuess(value) {
    if (value==correctNum) {
        alert('You are THE BEST! The expected number was found.');
        document.forms.checknumber.reset();
        i = 1;
    }

    else if (value>correctNum) {
        alert('Expected number is less than inputted number! Try again.');
        attempts.push(value);
        document.getElementById('attempts').innerHTML = attempts;
    }

    else if (value<correctNum) {
        alert('Expected number is more than inputted number! Try again.');
        attempts.push(value);
        document.getElementById('attempts').innerHTML = attempts;
    }
}
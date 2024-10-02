let secretNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;
let guessedNumber;
console.log("Welcome to the Guessing Game!");

do {
    guessedNumber = parseInt(prompt("Put a number between 1 and 10:"));
    attempts++;
    if (guessedNumber > secretNumber) {
        alert("Too high, try again!");
    } else if (guessedNumber < secretNumber) {
        alert("Too low, try again!");
    }
} while (guessedNumber !== secretNumber);

console.log("You guessed the correct number: ", secretNumber);
alert(`You guessed ${secretNumber} in ${attempts} attempts!`);

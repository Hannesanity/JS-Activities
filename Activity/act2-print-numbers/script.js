let number1 = parseInt(prompt("Enter the starting number:"));
let number2 = parseInt(prompt("Enter the ending number:"));

if (isNaN(number1) || isNaN(number2)) {
    console.log('Please provide valid numbers.');
    
}

for (let i = number1; i <= number2; i++) {
    console.log(i);
}



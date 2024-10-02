var grades = parseInt(prompt("Enter your grades:"));   

if (grades >= 90) {
    alert("You did a great job! Your grade is A");
    console.log("You did a great job! Your grade is A");
}
else if (grades >= 80) {
    alert("You did a good job! Your grade is B");
    console.log("You did a good job! Your grade is B");
}
else if (grades >= 70) {
    alert("You did an okay job! Your grade is C");
    console.log("You did an okay job! Your grade is C");
}
else if (grades >= 60) {
    alert("You did a bad job! Your grade is D");
    console.log("You did a bad job! Your grade is D");
}
else {
    alert("You did a terrible job! Your grade is F. Try again next time");
    console.log("You did a terrible job! Your grade is F. Try again next time");
}


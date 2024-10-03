// Step 1: Create an array called 'students' with three objects representing student information.
// Each student object should have properties: 'name', 'age', and 'grade'.

let students = [{ name: 'Alice', age: 14, grade: 'A' }, { name: 'Bob', age: 13, grade: 'B' }, { name: 'Charlie', age: 12, grade: 'C' }];

// Step 2: Access the name of the second student in the 'students' array and log it to the console.
console.log(students[2]);

// Step 3: Add a new student object to the 'students' array.
// The new student should have properties: 'name', 'age', and 'grade'.

students.push({name: 'Delta', age: 15, grade:'D'});

// Step 4: Loop through the 'students' array and log each student's name and grade to the console.
for (let i = 0; i < students.length; i++) {  // Fill in the correct loop condition
    console.log(students[i]);  // Display each fruit
}

// Step 5: Create an object called 'book' with properties 'title', 'author', and 'year'.
let book = {title: "Noli Me Tangere", author: "Jose Rizal", year: "1887"};

// Step 6: Access the title of the 'book' object and log it to the console.
console.log('Book Lists:', book.title);

// Step 7: Update the 'year' property of the 'book' object to 1930.
book.year = 1930;

// Step 8: Create a method called 'getSummary' for the 'book' object.
// The method should return a string summarizing the book's title, author, and year.
function getSummary(){
    return book;
};


// Step 9: Call the 'getSummary' method of the 'book' object and log the result to the console.
console.log(getSummary());

// Step 10: Create an array called 'library' and add the 'book' object to it.
let library = [book]

// Step 11: Log the 'library' array to the console to verify the book is stored in the array.
console.log(library)

// Step 12: Create an object called 'car' with properties 'brand', 'model', and 'year'.
let car = {brand: 'Suzuki', model: 'Ertiga', year: '2020'};

// Step 13: Access the 'model' property of the 'car' object and log it to the console.
console.log('Car Model:', car.model);

// Step 14: Update the 'year' property of the 'car' object to 2023.
car.year = 2023

console.log('Updated car details:', car)

// Step 15: Create a method called 'startEngine' for the 'car' object.
// The method should log a message to the console indicating that the car's engine is starting.
function startEngine (){
    console.log(`The ${car.brand} ${car.model}'s engine is starting`);
}

// Step 16: Call the 'startEngine' method of the 'car' object.
startEngine();

// Step 17: Create an array called 'garage' and add the 'car' object to it.
let garage = [car];

// Step 18: Log the 'garage' array to the console to verify the car is stored in the array.
console.log(garage);

// Step 19: Create an object called 'person' with properties 'name', 'age', and 'city'.
let person = {name: 'Mario', age: '20', city: 'Nevada'};

// Step 20: Access the 'age' property of the 'person' object and log it to the console.
console.log('The age of the person is: ',person.age)

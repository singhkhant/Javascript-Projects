//addition function that will run when I click the button
function addition_Function(){
    var addition = 15 + 25;
    document.getElementById("Add").innerHTML = addition;
}

//Subtraction function that will run when I click the button
function subtraction_Function(){
    var subtraction = 36 - 12;
    document.getElementById("Subtract").innerHTML = subtraction;
}

//Multiplication function that will run when I click the button
function multiplication_Function(){
    var multiplication = 48 * 2;
    document.getElementById("Multiply").innerHTML = multiplication;
}

//Division function that will run when I click the button
function division_Function(){
    var division = 44 / 11;
    document.getElementById("Divide").innerHTML = division;
}

//Multiple Math Operations that will run when I click the button
function more_Math(){
    var simple_Math = (12 + 16) * 2 / 4 - 2;
    document.getElementById("Math").innerHTML = simple_Math;
}

//Modulus Operator function that will run when I click the button

function modulus_Operator(){
    var remainder = 27 % 12;
    document.getElementById("Modulus").innerHTML = remainder;
}

//Negation function that will run when I click the button
function negation_Operator(){
    var x = 12;
    document.getElementById("Negate").innerHTML = -x;
}

//Math Object function that will run when I click the button
function math_Object_Function() {
    // Math.random() creates a decimal between 0 and 1
    // Multiplying by 100 shifts the decimal point
    // Math.round() snaps it to the nearest whole number
    var random_number = Math.round(Math.random() * 100);
    
    document.getElementById("Math_Object").innerHTML = random_number;
}

function Increment() { //Defining and naming the increment function
    var userInput = document.getElementById("IncInput").value;      // Get the value the user typed into the input field
    var value = Number(userInput);                                  // Convert that input into a Number
    value++;                                                        // Add one to the value
    document.getElementById("IncrementText").innerHTML = value;     // Print the result in the HTML <b> tag
}

function Decrement() {
    var userInput = document.getElementById("DecInput").value;      // Get the value the user typed into the input field
    var value = Number(userInput);                                  // Convert that input into a Number
    value--;                                                        // Subtract one from the value
    document.getElementById("DecrementText").innerHTML = value;     // Print the result in the HTML <b> tag
}

window.alert(Math.random());
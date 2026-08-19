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

var Y = 10;
Y++;
// Put quotes around the text, and use + to join it with Y
document.write("Increment of 10 is = " + Y);

// Adding a line break so the next sentence starts on a new line
document.write("<br>"); 

var Z = 13.62;
Z--;
// Put quotes around the text, and use + to join it with Z
document.write("Decrement of 13.62 is = " + Z);

window.alert(Math.random());
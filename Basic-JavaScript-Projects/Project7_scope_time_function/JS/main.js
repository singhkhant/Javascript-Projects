// Global Variable X
var X = 10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

document.write("<br>");
document.write("<br>");

// Local Variable Y
function Add_numbers_3() {
    var Y = 13;
    document.write(20 + Y + "<br>");
}
function Add_numbers_4() {
    document.write(Y + 100);
}
Add_numbers_3();
Add_numbers_4();

//Debugging using console.log() method
function Add_numbers_5() {
    var Z = 18;
    console.log(17 + Z + "<br>");
}
function Add_numbers_6() {
    console.log(Z + 100);
}
Add_numbers_5();
Add_numbers_6();

//A function that includes an If statement
function get_Date(){
    if (new Date().getHours() < 15) {
        document.getElementById("Greeting").innerHTML = "It is currently before 3pm.";
    }
}

//A function with if and else statements
function get_Reply() {
    var user_input = document.getElementById("userInput").value;
    if (user_input % 2 ===0) {
        reply = "You entered an even number!";
        document.getElementById("feedback").innerHTML = reply;
    }
    else {
        reply = "You entered an odd number!";
        document.getElementById("feedback").innerHTML = reply;
    }
}

//Utilizing the time_function()
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    } else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon!";
    } else {
        Reply = "It is evening time!";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

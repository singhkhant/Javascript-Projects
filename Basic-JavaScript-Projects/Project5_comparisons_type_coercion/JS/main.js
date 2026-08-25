//printing the data type
document.write("<h3>Typeof Operator</h3>");
document.write(typeof "Earth is Round");
document.write("<br>");
document.write("<br>");

//expression combining the string and number
document.write("<h3>String + Number</h3>");
document.write("13" + 6);
document.write("<br>");
document.write("<br>");

//Writing large enough number to display "Infinity"
document.write("<h3>Infinity</h3>");
document.write(3E423);
document.write("<br>");
document.write("<br>");

//Writing low enough negative number to display "-Infinity"
document.write("<h3>Negative Infinity</h3>");
document.write(2E324);
document.write("<br>");
document.write("<br>");

//utilizing the ">" operator
document.write("<h3> Greater Than Operator </h3>");
document.write(20 > 6);
document.write("<br>");
document.write("<br>");

//utilizing the "<" operator
document.write("<h3> Lesser Than Operator </h3>");
document.write(24 < 7);
document.write("<br>");
document.write("<br>");

//console.log()method
console.log(3 + 6);

//utilizing the == operator
document.write("<h3> == Operator </h3>");
document.write((4 + 3) == 7);
document.write("<br>");
document.write("<br>");

//utilizing the === operator
document.write("<h3> === Operator </h3>");

//using same data type and value
x = 5;
y = 5;
document.write("Condition 1: ");
document.write(x === y);
document.write("<br>");
document.write("<br>");

//using different data type and value
x = "Hello";
y = 7;
document.write("Condition 2: ");
document.write(x === y);
document.write("<br>");
document.write("<br>");

//using different data type but same value
x = "7";
y = 7;
document.write("Condition 3: ");
document.write(x === y);
document.write("<br>");
document.write("<br>");

//using same data type but different value
x = 5;
y = 7;
document.write("Condition 4: ");
document.write(x === y);
document.write("<br>");
document.write("<br>");

//utilizing the "&&" operator
document.write("<h3> AND Operator to display true </h3>");
document.write(20 > 6 && 12 > 8);
document.write("<br>");
document.write("<br>");

document.write("<h3> AND Operator to display false </h3>");
document.write(20 > 6 && 12 < 8);
document.write("<br>");
document.write("<br>");

//utilizing the "||" operator
document.write("<h3> OR Operator to display true</h3>");
document.write(24 < 7 || 21 > 10);
document.write("<br>");
document.write("<br>");

document.write("<h3> OR Operator to display false</h3>");
document.write(24 < 7 || 21 < 10);
document.write("<br>");
document.write("<br>");

//Utilizing the ! Operator
function not_Function(){
    document.getElementById("Not").innerHTML = !(3 > 6);
}

function not_Function2(){
    document.getElementById("Not2").innerHTML = !(8 > 4);
}
var A ="Welcome to the Javascript project";                         //Defining the variable A and giving it a string value
var B = "This is a string";                                         //Defining the variable B and giving it a string value
var C = "Did you know that Jupiter is so large " +                  
        "that more than 1,300 Earths could fit inside it?";         //Concatenating two strings
var ParentStar = "Sun", Planet1 = "Mercury", Planet2 = "Venus",     //Defining multiple variables and giving them string values
    Planet3 = "Earth", Planet4 = "Mars", Planet5 = "Jupiter",
    Planet6 = "Saturn", Planet7 = "Neptune", Planet8 = "Uranus";
var Sent1 = "This is the beginning of the string ";
var Sent2 = "and this is the end of the string.";
window.alert(A);                                                    //Displaying the value of variable A in a pop-up alert box
document.write('Hello, world!'+"<br>");                             //Writing a string literal to the HTML document, followed by a line break
document.write(B+"<br>");                                           //Writing the value of variable B to the HTML document, followed by a line break
document.write("Saturn\'s rings are mostly made of ice and rock, and many call it the \"Jewel of the Solar System\""+"<br>"); //Writing a string containing escaped quotes to the HTML document, followed by a line break
document.write(C+"<br>");                                           //Writing the value of variable C to the HTML document, followed by a line break
document.write(ParentStar + "<br>");                                //Writing the value of the variable ParentStar to the HTML document, followed by a line break
document.write(3+3 + "<br>");                                       //Writing a mathematical expression (3+3) and writing the result (6) to the HTML document
document.write(Sent1 + Sent2);                                      //Concatenating two variables together
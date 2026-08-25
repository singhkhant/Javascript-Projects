//Utilizing the .concat() method
function full_sentence() {
    var part_1 = "This is ";
    var part_2 = "Concat Method ";
    var part_3 = "Assignment!";
    var whole_sentence = part_1.concat(part_2, part_3);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

//Utilizing the .slice() method
function slice_Method() {
    var sentence = "This is Slice Method Assignment";
    var section = sentence.slice(8, 21);
    document.getElementById("Slice").innerHTML = section;
}

//Utlizing the .toString() method
function string_Method() {
    var myNumber = 807;
    document.getElementById("ToString").innerHTML = myNumber.toString();
}

//Utilizing the .toPrecision() method
function precision_method() {
    var myNumber = 145.44278910567115;
    document.getElementById("SpecificLength").innerHTML =
        myNumber.toPrecision(7);
}

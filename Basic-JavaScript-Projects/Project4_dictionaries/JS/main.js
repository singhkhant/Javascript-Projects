function my_Dictionary(){
    var Car = {
        Type:"Sedan",                                               //Defines Car Type
        Color: "Black",                                             //Defines Car Color
        Brand: "Mercedes",                                          //Defines Car Brand
        Year: 2017,                                                 //Defines Car Year
        Model: "C300!"                                              //Defines Car Model
    };
    delete Car.Brand;                                               //this removes the Brand KVP from the dictionary before it is displayed
    document.getElementById("Dictionary").innerHTML = Car.Brand;
}
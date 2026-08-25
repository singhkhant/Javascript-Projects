function validateForm() {
    // Retrieve the values from the First Name and Last Name inputs
    let firstName = document.forms["contactForm"]["firstname"].value;
    let lastName = document.forms["contactForm"]["lastname"].value;

    // Check if the First Name field is empty
    if (firstName === "") {
        alert("First Name must be filled out.");
        return false; // Prevents the form from submitting
    }

    // Check if the Last Name field is empty
    if (lastName === "") {
        alert("Last Name must be filled out.");
        return false; // Prevents the form from submitting
    }

    // If both fields have data, the validation passes
    alert("Form submitted successfully!");
    return true; 
}
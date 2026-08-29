function displayCelestialInfo(element) {
    // The getAttribute method targets the "data-planet-type" attribute from the HTML
    var celestialType = element.getAttribute("data-planet-type");
    
    // Concatenates the hidden data with the visible text for a popup alert
    alert(celestialType + " is the classification for " + element.innerHTML + "!");
}
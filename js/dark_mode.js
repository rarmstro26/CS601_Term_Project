
// Event handler to retrieve and handle persistence of dark mode value
window.onload = function () {
    let isDarkModeEnabled = localStorage.getItem("darkModeEnabled");

    // Access body of HTML
    let element = document.body;

    // Access toggle button to set dynamic styles
    let button = document.getElementById("toggle-button");

    // If darkmode is already set from prev page, set dark-mode class for body
    if (isDarkModeEnabled === "true") {
        element.classList.add("dark-mode");
        setButtonStyles(true);
    } else {
        // Remove dark mode if not set
        element.classList.remove("dark-mode");
        setButtonStyles(false);
    }
    // Toggle button display text and color
    function setButtonStyles(isDarkMode) {
        if (isDarkMode) {
            button.textContent = "Light Theme";
            button.style.color = "black";
            button.style.fontWeight = "bold";
            button.style.backgroundColor = "white";
        } else {
            button.textContent = "Dark Theme";
            // button.style.color = "white";
            button.style.backgroundColor = "hsl(39, 10%, 28%)";
        }
    }
}

// TOGGLE functionality - set dark mode item in local storage
function darkMode() {

    // Access body of HTML
    let element = document.body;
    // Toggle presence of dark-mode
    element.classList.toggle("dark-mode");

    // Set darkmode 
    let isDarkModeEnabled = element.classList.contains("dark-mode");

    // Store the dark mode setting in localStorage for 'darkModeEnabled'
    localStorage.setItem("darkModeEnabled", isDarkModeEnabled);

    let button = document.getElementById("toggle-button");
    setButtonStyles(isDarkModeEnabled);

    function setButtonStyles(isDarkMode) {
        // Toggle button display text and color
        if (isDarkModeEnabled) {
            button.textContent = "Light Theme";
            button.style.color = "black";
            button.style.fontStyle = "bold";
            button.style.backgroundColor = "white";
        } else {
            button.textContent = "Dark Theme";
            button.style.color = "white";
            button.style.backgroundColor = "hsl(39, 10%, 28%)";
        }
    }

}
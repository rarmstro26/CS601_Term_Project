
// Event handler to retrieve and handle persistence of dark mode value
window.onload = function () {
    let isDarkModeEnabled = localStorage.getItem("darkModeEnabled");

    // Access body of HTML
    let element = document.body;

    // If darkmode is already set from prev page, set dark-mode class for body
    if (isDarkModeEnabled === "true") {
        element.classList.add("dark-mode");
    } else {
        // Remove dark mode if not set
        element.classList.remove("dark-mode");
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
}
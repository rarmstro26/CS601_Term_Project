
// Event handler to retrieve dark mode value stored in local storage
window.onload = function () {
    let isDarkModeEnabled = localStorage.getItem("darkModeEnabled");

    // Get body of HTML
    let element = document.body;

    // If darkmode is already set from prev page, set dark-mode class
    if (isDarkModeEnabled === "true") {
        element.classList.add("dark-mode");
    } else {
        // Remove dark mode if not set
        element.classList.remove("dark-mode");
    }
}

// Handle dark mode toggle functionality
function darkMode() {
    let element = document.body;
    // Toggle presence of dark-mode
    element.classList.toggle("dark-mode");

    // Set darkmode 
    let isDarkModeEnabled = element.classList.contains("dark-mode");

    // Store the dark mode setting in localStorage
    localStorage.setItem("darkModeEnabled", isDarkModeEnabled);
}
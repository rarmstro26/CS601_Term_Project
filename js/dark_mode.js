
// Event handler to retrieve dark mode value stored in local storage
window.onload = function() {
    var isDarkModeEnabled = localStorage.getItem("darkModeEnabled");

    // Get body of HTML
    var element = document.body;
    
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
    var element = document.body;
    // Toggle presence of dark-mode
    element.classList.toggle("dark-mode");

    // Set darkmode 
    var isDarkModeEnabled = element.classList.contains("dark-mode");

    // Store the dark mode setting in localStorage
    localStorage.setItem("darkModeEnabled", isDarkModeEnabled);
}
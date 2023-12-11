
// Define regex pattern for alpha only input for all characters
const nameAlphaRegex = /^[A-Za-z]+$/;

// Define regex pattern for email formatting
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

document.forms["form-1"].addEventListener("submit", function (event) {
    event.preventDefault(); 

    // Access form fields
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    // Get error elements
    const firstNameError = document.getElementById("first-name-error");
    const lastNameError = document.getElementById("last-name-error");
    const emailError = document.getElementById("email-error");
    const messageError = document.getElementById("message-error");

    // Initialize flag for form validity
    let isValid = true;

    // First Name - Test for length and alpha-only pattern
    if (firstName.value.length < 2 || !testNameAlphaRegex(firstName.value)) {
        firstNameError.textContent = "Please enter a minimum of 2 characters and only alpha characters a-z";
        firstName.focus();
        isValid = false;
    } else {
        firstNameError.textContent = "";
    }

    // Last Name - Test for length and alpha-only pattern
    if (lastName.value.length < 2 || !testNameAlphaRegex(lastName.value)) {
        lastNameError.textContent = "Please enter a minimum of 2 characters and only alpha characters a-z";
        lastName.focus();
        isValid = false;
    } else {
        lastNameError.textContent = "";
    }

    // Email - test for valid email formatting
    if (!testEmailIsValid(email.value)) {
        emailError.textContent = "Please enter a valid email address";
        email.focus();
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Message - test for max character limit
    if (message.value.length > 100) {
        messageError.textContent = "Please enter 100 characters or less";
        message.focus();
        isValid = false;
    } else {
        messageError.textContent = "";
    }
    // Setup form fields to send as body to Formspree
    if (isValid) {
        // Get form data
        const formData = new FormData();
        formData.append("firstName", firstName.value);
        formData.append("lastName", lastName.value);
        formData.append("email", email.value);
        formData.append("message", message.value);

        // Send form data to Formspree endpoint using Fetch API
        fetch("https://formspree.io/f/mleyykrv", {
            method: "POST",
            headers: {
                "Accept": "application/json"
            },
            body: formData
        })
            .then(response => {
                if (response.ok) {
                    // Handle successful submission
                    console.log("Form submitted successfully");
                    alert("Thanks for the message!");

                    // Run reset function to clear form after submission
                    clearErrors();
                } else {
                    throw new Error("Form submission failed");
                }
            })
            .catch(error => {
                console.error("Form submission failed:", error);
                alert("Oops! Something went wrong. Please try again.");
            });
    }
}
);

// Function to test alpha regex pattern for first/last name fields
function testNameAlphaRegex(name) {
    // Run regex test against first/last name field passed when calling function - return t/f
    return nameAlphaRegex.test(name);
}

// Function to test email address pattern
function testEmailIsValid(email) {
    // Run regex test against instructor 'name' passed when calling function - return t/f
    return emailRegex.test(email);
}

// Create a 'clear-error' function tied to 'Reset' button to fully reset form
// Updated to also handle clear on successful submission
function clearErrors() {
    document.getElementById("first-name-error").textContent = "";
    document.getElementById("firstName").value = "";
    document.getElementById("last-name-error").textContent = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    document.getElementById("char-count").textContent = "0/100";
}

// Dynamically count characters entered to text area and display
function countCharacters(textarea) {
    const charCount = document.getElementById("char-count");
    charCount.textContent = `${textarea.value.length}/100`;
}


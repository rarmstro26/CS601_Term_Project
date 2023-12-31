// Using data from: https://thecatapi.com/

// URL to random cat test API site
const url = "https://api.thecatapi.com/v1/images/search?"

// Wait for window load - listen for click here button to launch fetch function
window.onload = function () {
    let clickData = document.getElementById('cat-button');
    // Button, when clicked, run getData function
    clickData.onclick = fetchCat;
}

// Fetch function to retrieve/handle response and display educationd ata
function fetchCat() {

    // Initiate GET via fetch to hosted JSON url
    fetch(url)
        // Handle the response from fetch request
        .then((response) => {
            console.log(response.status);
            // Display response status to alert
            // alert(`Fetch returned status code = ${response.status}`);
            // Return parsed JSON data from response
            return response.json();
        })
        //  Process the returned JSON data and display to DOM
        .then(data => {
            console.log(data);
            // Access DOM elements to display text
            let catImg = document.getElementById('random-cat');
            let catText = document.getElementById('random-cat-text');
            catImg.src = data[0].url;

            // Unhide img element and display
            catImg.style.display = "block";

            // Load and dynamically display text and API reference URL
            catText.innerHTML = `Random cat image from: <a href="https://thecatapi.com/" target="_blank"
            style="font-style: italic; color: blue;">The Cat API</a>`

        })
        // Catch any errors encountered during fetch
        .catch((err) => {
            console.log("Error with fetch: " + err);
            alert(`Error with fetch ${err}`);
        });
}
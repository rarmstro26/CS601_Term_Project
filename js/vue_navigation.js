
// Reusable Vue component to house site navigation - bind 'active' styling to passed 'currentPage' property 
Vue.component('navigation', {
    props: {
        // Property passed from HTML to set active page - set as required for safety
        currentPage: {
            required: true
        }
    },
    // Housing for nav menu and dynamic class binding based on prop evaluation
    template: `
        <nav>
        <ul>
            <li><a :class="{ active: currentPage === 'index.html' }" href="index.html">Home</a></li>
            <li><a :class="{ active: currentPage === 'about.html' }" href="about.html">About</a></li>
            <li><a :class="{ active: currentPage === 'coursework.html' }" href="coursework.html">Coursework</a></li>
            <li><a :class="{ active: currentPage === 'career.html' }" href="career.html">Career</a></li>
            <li><a :class="{ active: currentPage === 'contact.html' }" href="contact.html">Contact</a></li>
            <li><a :class="{ active: currentPage === 'resume2.html' }" href="resume2.html">Resume</a></li>
            <li><a :class="{ active: currentPage === 'random_cat.html' }" href="random_cat.html">Cat of the Day</a></li>
        </ul>
    </nav>
        `
});

var app = new Vue({
    el: '#app',

});

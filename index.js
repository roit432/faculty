// JavaScript to handle active class
const navLinks = document.querySelectorAll('.nav-bar li');

// Add click event listener to each nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove active class from all links
        navLinks.forEach(item => item.classList.remove('active'));

        // Add active class to the clicked link
        link.classList.add('active');
    });
});
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



const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const closeSidebarBtn = document.getElementById('close-sidebar');

// Toggle sidebar visibility when menu toggle is clicked
menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('show');
});

// Close sidebar when the close button is clicked
closeSidebarBtn.addEventListener('click', () => {
    sidebar.classList.remove('show');
});

// Close sidebar when clicking a link inside the sidebar
const sidebarLinks = document.querySelectorAll('.sidebar a');
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('show');
    });
});

// Close sidebar when clicking outside the sidebar
document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
        sidebar.classList.remove('show');
    }
});

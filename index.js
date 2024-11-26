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

// testimonials
// script.js
document.addEventListener("DOMContentLoaded", () => {
    const testimonials = [
      {
        text: "The team was fantastic! Their expertise and dedication really impressed me.",
        name: "John Doe",
        role: "CEO, Example Inc.",
        photo: "https://via.placeholder.com/80"
      },
      {
        text: "Exceptional service and attention to detail. I couldn't be happier!",
        name: "Jane Smith",
        role: "Founder, Startup X",
        photo: "https://via.placeholder.com/80"
      },
      {
        text: "Highly professional and reliable. Delivered everything on time!",
        name: "Mike Wilson",
        role: "Manager, TechWorld",
        photo: "https://via.placeholder.com/80"
      }
    ];
  
    let currentTestimonialIndex = 0;
  
    const updateTestimonial = () => {
      const card = document.querySelector(".testimonial-card");
      const { text, name, role, photo } = testimonials[currentTestimonialIndex];
      card.querySelector(".testimonial-text").textContent = `"${text}"`;
      card.querySelector(".client-name").textContent = name;
      card.querySelector(".client-role").textContent = role;
      card.querySelector(".client-photo").src = photo;
  
      currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    };
  
    setInterval(updateTestimonial, 5000); // Rotate testimonials every 5 seconds
  });
  

  
  //pop up 
  // DOM Elements
   // const registerButton = document.getElementById('registerButton');
   const popup = document.getElementById('popup');
   const closePopup = document.getElementById('closePopup');
   const registerNow = document.getElementById('registerNow');
   
   // Open Popup
  // registerButton.addEventListener('click', () => {
    // popup.style.display = 'flex';
   //});
    // Show Popup Automatically on Page Load
    document.addEventListener('DOMContentLoaded', () => {
 setTimeout(() => {
   popup.style.display = 'flex';
 }, 1000); // Popup appears after 3 seconds
});

   // Close Popup
   closePopup.addEventListener('click', () => {
     popup.style.display = 'none';
   });
   
   // Register Now Button
  //  registerNow.addEventListener('click', () => {
  //    alert('You clicked Register Now!');
  //    popup.style.display = 'none';
  //  });

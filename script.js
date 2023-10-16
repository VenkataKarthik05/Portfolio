// // JavaScript Functionality

// // Smooth scrolling
// const navLinks = document.querySelectorAll('nav ul li a');

// navLinks.forEach(link => {
//   link.addEventListener('click', e => {
//     e.preventDefault();

//     const targetSection = document.querySelector(e.target.getAttribute('href'));
//     window.scrollTo({
//       top: targetSection.offsetTop,
//       behavior: 'smooth'
//     });
//   });
// });

gsap.from(".animated-text", {
  opacity: 0,
  duration: 1,
  delay: 0.5,
  y: 30,
  stagger: 0.2
});

// Form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', e => {
  e.preventDefault();

  const nameInput = document.getElementById('nameInput');
  const emailInput = document.getElementById('emailInput');
  const messageInput = document.getElementById('messageInput');

  // Perform form validation here and handle form submission
  // You can use an AJAX request to send the form data to the server

  // Clear form inputs after submission
  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
 
});

document.getElementById("myBtn").addEventListener("click", function() {
  alert("Are you sure ?");
});



// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Typewriter effect
function typewriter(element, text, speed = 100) {
  let i = 0;
  element.textContent = '';
  const typeChar = () => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typeChar, speed);
    }
  };
  typeChar();
}

// Initialize typewriter on page load
document.addEventListener('DOMContentLoaded', () => {
  const typewriterElement = document.querySelector('.typewriter');
  if (typewriterElement) {
    const text = typewriterElement.getAttribute('data-text');
    setTimeout(() => typewriter(typewriterElement, text, 100), 500);
  }
});

// Add scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-visible');
    }
  });
}, observerOptions);

// Observe all cards and content
document.querySelectorAll(
  '.project-card, .skill-category, .stat-card, .experience-item, .contact-card'
).forEach((el, index) => {
  el.style.opacity = '0';
  el.style.animation = `fadeInUp 0.8s ease ${index * 0.1}s forwards`;
  observer.observe(el);
});

// Active navigation link on scroll
window.addEventListener('scroll', () => {
  let current = '';
  document.querySelectorAll('section').forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

// Mobile menu toggle (if hamburger exists)
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  // Close menu when link is clicked
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });
}

// Console welcome message
console.log('%cWelcome to Bhargavi Dongari\'s Portfolio!', 'color: #6366f1; font-size: 20px; font-weight: bold');
console.log('%cBuilt with modern web technologies', 'color: #64748b; font-size: 14px');

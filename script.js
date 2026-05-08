// =============================================
// DOM Elements
// =============================================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');
const allLinks = document.querySelectorAll('a[href^="#"]');
const themeToggle = document.getElementById('themeToggle');
const navClose = document.getElementById('navClose');

// =============================================
// Theme Toggle - Light/Dark Mode
// =============================================
// Check for saved theme preference or default to light
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
}

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    if (newTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }

    localStorage.setItem('theme', newTheme);
});

// =============================================
// Navbar Scroll Effect
// =============================================
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// =============================================
// Mobile Menu Toggle
// =============================================
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
allLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Close mobile menu when clicking close button
if (navClose) {
    navClose.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
}

// =============================================
// Smooth Scroll
// =============================================
allLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// =============================================
// Scroll Animations
// =============================================
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            // Animate skill bars when visible
            if (entry.target.closest('.skills')) {
                const skillBars = entry.target.querySelectorAll('.skill-fill');
                skillBars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    bar.style.setProperty('--target-width', width + '%');
                    bar.classList.add('animated');
                });
            }
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.scroll-animate').forEach(el => {
    animateOnScroll.observe(el);
});

// =============================================
// Active Navigation Link on Scroll
// =============================================
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    allLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// =============================================
// Form Validation & Submission
// =============================================
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Reset feedback
    formFeedback.className = 'form-feedback';
    formFeedback.textContent = '';

    // Validate name
    if (!name) {
        showFeedback('Please enter your name', 'error');
        return;
    }

    // Validate email
    if (!email) {
        showFeedback('Please enter your email', 'error');
        return;
    }

    if (!isValidEmail(email)) {
        showFeedback('Please enter a valid email address', 'error');
        return;
    }

    // Validate message
    if (!message) {
        showFeedback('Please enter your message', 'error');
        return;
    }

    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoLink = `mailto:amit_sv6685@yahoo.com?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message
    showFeedback('Email client opened! Your message has been prepared.', 'success');

    // Reset form
    contactForm.reset();

    // Clear success message after 5 seconds
    setTimeout(() => {
        formFeedback.textContent = '';
        formFeedback.className = 'form-feedback';
    }, 5000);
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showFeedback(message, type) {
    formFeedback.textContent = message;
    formFeedback.classList.add(type);
}

// =============================================
// Typing Animation
// =============================================
const typingText = document.querySelector('.typing-text');
const phrases = ['Sr. Engineer (PMO)', 'Project Coordinator', 'Operations Lead'];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typingSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 500;
    }

    setTimeout(typeEffect, typingSpeed);
}

// Start typing effect
if (typingText) {
    typeEffect();
}

// =============================================
// Parallax Effect (Subtle)
// =============================================
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const decorations = document.querySelectorAll('.decoration-circle, .decoration-line');

    decorations.forEach((dec, index) => {
        const speed = 0.05 * (index + 1);
        dec.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// =============================================
// Add keyboard navigation support
// =============================================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

// =============================================
// Initialize - Set initial state
// =============================================
document.addEventListener('DOMContentLoaded', () => {
    // Trigger initial scroll check for navbar
    window.dispatchEvent(new Event('scroll'));

    // Add fade-in effect to page load
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});
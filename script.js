// --- Navbar Scroll Effect & Mobile Menu ---
const navbar = document.querySelector('.navbar');
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = menuBtn.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = menuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// --- Typewriter Effect ---
const phrases = [
    "Aspiring Software Engineer",
    "Cloud Explorer & DevOps Enthusiast",
    "DevOps Expert",
    "Continuous Learner"
];

let phraseIndex = 0;
let letterIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

const typewriterElement = document.querySelector('.typewriter-text');

function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        typewriterElement.textContent = currentPhrase.substring(0, letterIndex - 1);
        letterIndex--;
        typeSpeed = 50;
    } else {
        typewriterElement.textContent = currentPhrase.substring(0, letterIndex + 1);
        letterIndex++;
        typeSpeed = 100;
    }

    if (!isDeleting && letterIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause at end of phrase
    } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500; // Pause before new phrase
    }

    setTimeout(type, typeSpeed);
}

// Start typing effect on load
document.addEventListener('DOMContentLoaded', () => {
    if(typewriterElement) {
        setTimeout(type, 1000);
    }
});

// --- Scroll Reveal Animation ---
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-el');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.hidden-el').forEach(el => {
    observer.observe(el);
});

// Background animation is now handled purely in CSS via .floating-tools-bg

// --- Image Modal Logic ---
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.modal-close');
const profileImage = document.querySelector('.logo-img');

if (profileImage && modal) {
    // Open Modal
    profileImage.addEventListener('click', function() {
        modal.classList.add('active');
        modalImg.src = this.src;
    });

    // Close Modal via Button
    closeBtn.addEventListener('click', function() {
        modal.classList.remove('active');
    });

    // Close Modal via clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // Close Modal via Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });
}

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

// --- Particles.js Configuration for DevOps/Network Background ---
document.addEventListener('DOMContentLoaded', () => {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 40,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#64ffda"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.2,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#64ffda",
                    "opacity": 0.1,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 0.5
                        }
                    },
                    "push": {
                        "particles_nb": 4
                    }
                }
            },
            "retina_detect": true
        });
    }
});

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

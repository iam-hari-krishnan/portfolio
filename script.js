// --- Intro Animation ---
document.addEventListener("DOMContentLoaded", () => {
    const introText = "system.init() ...";
    const introElement = document.getElementById("intro-typing");
    const introScreen = document.getElementById("intro-screen");
    let i = 0;

    function typeIntro() {
        if (i < introText.length) {
            introElement.textContent += introText.charAt(i);
            i++;
            setTimeout(typeIntro, 80);
        } else {
            setTimeout(() => {
                introScreen.classList.add("fade-out");
                document.body.classList.remove("no-scroll");
                setTimeout(() => {
                    introScreen.style.display = "none";
                }, 800);
            }, 600);
        }
    }

    if (introElement && introScreen) {
        setTimeout(typeIntro, 300);
    } else {
        document.body.classList.remove("no-scroll");
    }
});

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

// --- Dynamic Data Injection ---

// Education
const eduContainer = document.getElementById('education-timeline');
if (eduContainer && typeof portfolioData !== 'undefined' && portfolioData.education) {
    portfolioData.education.forEach(edu => {
        eduContainer.innerHTML += `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <h4>${edu.degree}</h4>
                <h5>${edu.institution}</h5>
                ${edu.duration ? `<span class="timeline-date">${edu.duration}</span>` : ''}
                <p>${edu.score}</p>
            </div>
        `;
    });
}

// Skills
const skillsContainer = document.getElementById('skills-grid');
if (skillsContainer && typeof portfolioData !== 'undefined' && portfolioData.skills) {
    portfolioData.skills.forEach(skill => {
        let itemsHtml = skill.items.map(item => `<span class="tag">${item}</span>`).join('');
        skillsContainer.innerHTML += `
            <div class="skill-category glass-card hidden-el" ${skill.delay ? `style="transition-delay: ${skill.delay};"` : ''}>
                <h3><i class="${skill.icon}"></i> ${skill.category}</h3>
                <div class="tags">
                    ${itemsHtml}
                </div>
            </div>
        `;
    });
}

// Experience
const expContainer = document.getElementById('experience-grid');
if (expContainer && typeof portfolioData !== 'undefined' && portfolioData.experience) {
    portfolioData.experience.forEach(exp => {
        let bulletsHtml = exp.bullets.map(b => `<li>${b}</li>`).join('');
        expContainer.innerHTML += `
            <div class="experience-item hidden-el glass-card" ${exp.delay ? `style="transition-delay: ${exp.delay};"` : ''}>
                <div class="exp-header">
                    <h3 class="role">${exp.role}</h3>
                    <span class="company"><i class="fas fa-building"></i> ${exp.company}</span>
                </div>
                <span class="date"><i class="far fa-calendar-alt"></i> ${exp.date}</span>
                <ul class="exp-list">
                    ${bulletsHtml}
                </ul>
            </div>
        `;
    });
}

// Projects
const projContainer = document.getElementById('projects-grid');
if (projContainer && typeof portfolioData !== 'undefined' && portfolioData.projects) {
    portfolioData.projects.forEach(proj => {
        let techHtml = proj.tech.map(t => `<li>${t}</li>`).join('');
        projContainer.innerHTML += `
            <div class="project-card glass-card hidden-el" ${proj.delay ? `style="transition-delay: ${proj.delay};"` : ''}>
                <div class="project-content">
                    <div class="project-top">
                        <i class="far fa-folder-open folder-icon"></i>
                        <div class="project-links">
                            <a href="${proj.github}" target="_blank" rel="noopener noreferrer" aria-label="Github Link"><i class="fab fa-github"></i></a>
                            <a href="${proj.link}" aria-label="External Link"><i class="fas fa-external-link-alt"></i></a>
                        </div>
                    </div>
                    <h3 class="project-title">${proj.title}</h3>
                    <div class="project-desc">
                        <p>${proj.description}</p>
                    </div>
                    <ul class="project-tech-list">
                        ${techHtml}
                    </ul>
                </div>
            </div>
        `;
    });
}

// Extras
const extrasContainer = document.getElementById('extra-grid');
if (extrasContainer && typeof portfolioData !== 'undefined' && portfolioData.extras) {
    let certsHtml = portfolioData.extras.certifications.map(c => `<li>${c}</li>`).join('');
    let pubsHtml = portfolioData.extras.publications.map(p => `<li>${p}</li>`).join('');
    let goalsHtml = portfolioData.extras.goals.map(g => `<li>${g}</li>`).join('');

    extrasContainer.innerHTML += `
        <div class="certifications glass-card hidden-el">
            <h3><i class="fas fa-certificate"></i> Certifications</h3>
            <ul class="styled-list">${certsHtml}</ul>
        </div>
        <div class="publications glass-card hidden-el" style="transition-delay: 0.1s;">
            <h3><i class="fas fa-book"></i> Publications & Workshops</h3>
            <ul class="styled-list">${pubsHtml}</ul>
        </div>
        <div class="goals glass-card hidden-el" style="transition-delay: 0.2s;">
            <h3><i class="fas fa-rocket"></i> Future Goals</h3>
            <ul class="styled-list">${goalsHtml}</ul>
        </div>
    `;
}

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

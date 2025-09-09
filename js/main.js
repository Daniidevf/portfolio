// Typing Animation
const typed = new Typed(".typing", {
    strings: ["Développeur Full Stack", "Développeur Web", "Développeur Mobile", "Concepteur d'Applications"],
    typeSpeed: 80,
    backSpeed: 50,
    loop: true
});

// Navbar Toggler
const navToggler = document.querySelector(".nav-toggler");
const navLinks = document.querySelector(".nav-links");

navToggler.addEventListener("click", () => {
    navToggler.classList.toggle("active");
    navLinks.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
});

// Close navbar when clicking on a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navToggler.classList.remove("active");
        navLinks.classList.remove("active");
        document.body.classList.remove("no-scroll");
    });
});

// Sticky Header
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 100) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Barre de progression
const scrollProgress = document.getElementById("scroll-progress");

window.addEventListener("scroll", () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollY = window.scrollY;

    const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100;

    // Mettre à jour la barre de progression
    scrollProgress.style.width = scrollPercent + "%";

    // Mettre à jour le pourcentage du bouton back-to-top
    const progressText = document.querySelector(".back-to-top .progress-text");
    progressText.textContent = Math.round(scrollPercent) + "%";

    // Afficher ou masquer le bouton back-to-top
    const backToTopBtn = document.getElementById("back-to-top");
    const percent = document.getElementById("percent")

        if (window.pageYOffset > 500) {
            backToTopBtn.classList.add("active");
            percent.classList.add("active");
        } else {
            backToTopBtn.classList.remove("active");
            percent.classList.remove("active");
        }
});

// Active Section
const sections = document.querySelectorAll("section");
const navLinksItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scrolled", () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectioHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 300) {
            current = section.getAttribute("id");
        }
    });

    navLinksItems.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

// Back to Top Button - Version corrigée
const backToTopBtn = document.getElementById("back-to-top");

backToTopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // Utiliser une méthode plus fiable pour le défilement
    const scrollToTop = () => {
        const currentPosition = window.pageYOffset;
        if (currentPosition > 0) {
            window.scrollTo(0, Math.max(0, currentPosition - currentPosition / 10));
            requestAnimationFrame(scrollToTop);
        }
    };
    scrollToTop();
});

// Back to Top Button
// const backToTopBtn = document.getElementById("back-to-top");
//
// backToTopBtn.addEventListener("click", () => {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     });
// });

// Form Submission
const contactForm = document.querySelector(".contact-form form");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Animation de succès
    contactForm.innerHTML = `<div style="text-align: center; padding: 50px 0;">
<i class="fas fa-check-circle" style="font-size: 5rem; color: #6c63ff; margin-bottom: 20px;"></i>
<h3 style="color: white; margin-bottom: 20px;">Message envoyé avec succès !</h3>
<p style="color: rgba(255, 255, 255, 0.8);">Je vous répondrai dès que possible.</p>
</div>
    `;
});

// Animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.skill-card, .portfolio-item, .info-card, .contact-info-item');

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (elementPosition < screenPosition) {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }
    });
};

// Set initial state for animated elements
document.querySelectorAll('.skill-card, .portfolio-item, .info-card, .contact-info-item').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
})

// Trigger animations
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Gestion des modals pour les projets
const projectButtons = document.querySelectorAll('.view-project');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close-modal');

projectButtons.forEach(button => {
    button.addEventListener('click', () => {
        const projectId = button.getAttribute('data-project');
        const modal = document.getElementById(`project-modal-${projectId}`);
        modal.classList.add('active');
        document.body.classList.add('no-scroll');
    });
});

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        modal.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
});

// Fermer le modal en cliquant en dehors
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
});




// Fermer le modal avec la touche Échap
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modals.forEach(modal => {
            modal.classList.remove('active');
            document.body.classList.remove('no-scroll')
        })
    }
})
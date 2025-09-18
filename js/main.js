// Traductions
const translations = {
    fr: {
        // Navigation
        "nav.home": "Accueil",
        "nav.about": "À Propos",
        "nav.skills": "Compétences",
        "nav.portfolio": "Portfolio",
        "nav.contact": "Contact",

        // Hero section
        "hero.hello": "Salut, je suis",
        "hero.profession": "Je suis <span class='typing'>Développeur Full Stack</span>",
        "hero.intro": "Développeur Full Stack passionné avec 3 ans d'expérience dans la création de solutions numériques innovantes pour le web et mobile",
        "hero.contactBtn": "Contactez-moi",
        "hero.cvBtn": "Télécharger CV",

        // About section
        "about.title": "À Propos de Moi",
        "about.subtitle": "Découvrez mon parcours, mes compétences et ma passion pour la technologie",
        "about.im": "Je suis",
        "about.text1": "Je suis un jeune Malien passionné par les nouvelles technologies depuis mon plus jeune âge. Ma fascination pour les mathématiques m'a naturellement conduit vers la programmation. Je suis une personne déterminée, sérieuse et adaptable, avec une forte capacité d'apprentissage.",
        "about.text2": "Je parle couramment le Bambara, le Français et l'Anglais. Mes loisirs incluent la lecture, les jeux vidéo et le sport.",
        "about.text3": "Avec plus de 3 ans d'expérience dans le développement web et mobile, j'ai travaillé sur divers projets allant des applications d'entreprise aux solutions IoT innovantes.",
        "about.info.name": "Nom complet",
        "about.info.phone": "Téléphone",
        "about.info.email": "Email",
        "about.info.location": "Localisation",
        "about.info.follow": "Me suivre",

        // Skills section
        "skills.title": "Mes Compétences",
        "skills.subtitle": "Technologies et outils que je maîtrise",
        "skills.mobile": "Mobile",
        "skills.database": "Bases de Données",

        // Portfolio section
        "portfolio.title": "Mon Portfolio",
        "portfolio.subtitle": "Découvrez mes projets récents",
        "portfolio.viewDetails": "Voir les détails",
        "portfolio.project1.desc": "Application web de gestion des ventes",
        "portfolio.project2.desc": "Back office de gestion des transactions",
        "portfolio.project3.desc": "Solution IoT avec intelligence artificielle",
        "portfolio.project4.desc": "Cagnotte en ligne",
        "portfolio.project5.desc": "Vente & Achat de ticket en ligne",
        "portfolio.project6.desc": "Projet en ligne",

        // Modals
        "modal.description": "Description du Projet",
        "modal.details": "Détails du Projet",
        "modal.language": "Langages & Framework",
        "modal.results": "Résultats",

        // Project1
        "modal.project1.description": "Plateforme e-commerce complète développée pour Addinn Paris, permettant la gestion des ventes, des utilisateurs et des stocks via une interface intuitive.",
        "modal.project1.detail1": "Conception et développement d'une application web responsive",
        "modal.project1.detail2": "Système d'administration avancé pour la gestion des comptes",
        "modal.project1.detail3": "Tableau de bord analytique pour le suivi des performances",
        "modal.project1.detail4": "Intégration de paiements sécurisés via Stripe",
        "modal.project1.detail5": "Système de gestion des stocks en temps réel",
        "modal.project1.results": "L'application a permis à Addinn Paris d'augmenter ses ventes en ligne de 40% et de réduire le temps de gestion administrative de 30%.",

        // Project2
        "modal.project2.description": "Solution back-office développée pour Orange Mali, optimisant la gestion et la configuration des services financiers.",
        "modal.project2.detail1": "Développement d'un tableau de bord dynamique pour le suivi des transactions",
        "modal.project2.detail2": "Mise en place d'un système de reporting avancé",
        "modal.project2.detail3": "Interface d'administration pour la gestion des utilisateurs",
        "modal.project2.detail4": "Intégration avec les systèmes financiers existants",
        "modal.project2.detail5": "Mécanismes de sécurité renforcés pour les transactions",
        "modal.project2.results": "La solution a permis à Orange Mali de réduire les erreurs de transaction de 25% et d'améliorer le temps de résolution des problèmes de 40%.",

        // Project3
        "modal.project3.description": "Solution IoT combinant matériel embarqué et intelligence artificielle pour détecter et diagnostiquer les infections des plantes dans les exploitations agricoles.",
        "modal.project3.detail1": "Conception d'un dispositif IoT avec capteurs environnementaux",
        "modal.project3.detail2": "Développement d'algorithmes d'IA pour l'analyse d'images de plantes",
        "modal.project3.detail3": "Application mobile permettant aux agriculteurs de scanner leurs plantes",
        "modal.project3.detail4": "Plateforme web pour le suivi des exploitations agricoles",
        "modal.project3.detail5": "Système d'alertes et recommandations personnalisées",
        "modal.project3.results": "La solution a permis de réduire les pertes agricoles de 35% dans les régions pilotes et a reçu le prix de l'innovation technologique au Mali.",

        // Project4
        "modal.project4.description": "Plateforme de cagnotte en ligne permettant de collecter des fonds pour des projets personnels ou associatifs.",
        "modal.project4.detail1": " Intégration de fonctionnalités de paiment sécurisées et d'une interface simple pour l'utilisateur final",
        "modal.project4.detail2": "Gestion des cagnottes et des contributeurs",
        "modal.project4.detail3": "Système d'authentification et de profil utilisateur",
        "modal.project4.detail4": "Intégration d'API de paiement (MangoPay/PayPal)",
        "modal.project4.detail5": "Tableau de bord pour le suivi des contributeurs et des contributions",
        "modal.project4.results": "Permet à des milliers d'utilisateurs de financer leurs projets et de collecter facilement des fonds en ligne partout dans le monde.",

        // Project5
        "modal.project5.description": "Système de billetterie en ligne lié à la plateforme Kwendoo, permettant aux orginisateurs de créer, vendre et gérer des tickets pour des événements.",
        "modal.project5.detail1": "Module de création d'événements et de tickets",
        "modal.project5.detail2": "Gestion des ventes et des participations",
        "modal.project5.detail3": "Génération de QR codes pour validation des tickets",
        "modal.project5.detail4": "Intégration d'API de paiement (MangoPay/PayPal)",
        "modal.project5.detail5": "Intégration avec la base utilisateur de Kwendoo",
        "modal.project5.results": "Solution flexible qui a facilité la vente de milliers de tickets pour des événements variés.",

        // Project6
        "modal.project6.description": "Plateforme de financement participatif pour des projets en Afrique et dans la diaspora.",
        "modal.project6.detail1": "Intégration des moyens de paiement adaptés et un suivi complet des projets financés",
        "modal.project6.detail2": "Mise en place d'une interface pour les porteurs de projets",
        "modal.project6.detail3": "Suivi de financement et reporting",
        "modal.project6.detail4": "Gestion des paiements multi-devises",
        "modal.project6.detail5": "Sécurisation des transactions et données",
        "modal.project6.results": "Des centaines de projets financés et une meilleure visibilité pour les entrepreneurs africains.",

        // Contact section
        "contact.title": "Contactez-Moi",
        "contact.subtitle": "Parlons de votre prochain projet",
        "contact.phone": "Téléphone",
        "contact.email": "Email",
        "contact.location": "Localisation",
        "contact.website": "Website",
        "contact.form.name": "Votre nom",
        "contact.form.email": "Votre email",
        "contact.form.subject": "Sujet",
        "contact.form.message": "Votre message",
        "contact.form.send": "Envoyer Message",

        // Footer
        "footer.about": "Développeur Full Stack passionné par la création de solutions numériques innovantes pour le web et mobile.",
        "footer.links": "Liens Rapides",
        "footer.skills": "Compétences Clés",
        "footer.skill1": "Développement Web",
        "footer.skill2": "Applications Mobiles",
        "footer.skill3": "Solutions IoT",
        "footer.skill4": "Intelligence Artificielle",
        "footer.skill5": "UX/UI Design",
        "footer.rights": "Tous droits réservés"
    },
    en: {
        // Navigation
        "nav.home": "Home",
        "nav.about": "About",
        "nav.skills": "Skills",
        "nav.portfolio": "Portfolio",
        "nav.contact": "Contact",

        // Hero section
        "hero.hello": "Hi, I'm",
        "hero.profession": "I'm a <span class='typing'>Full Stack Developer</span>",
        "hero.intro": "Passionate Full Stack Developer with 3 years of experience in creating innovative digital solutions for web and mobile",
        "hero.contactBtn": "Contact me",
        "hero.cvBtn": "Download CV",

        // About section
        "about.title": "About Me",
        "about.subtitle": "Discover my journey, skills and passion for technology",
        "about.im": "I am",
        "about.text1": "I am a young Malian passionate about new technologies from an early age. My fascination with mathematics naturally led me to programming. I am a determined, serious and adaptable person with a strong learning ability.",
        "about.text2": "I am fluent in Bambara, French and English. My hobbies include reading, video games and sports.",
        "about.text3": "With over 3 years of experience in web and mobile development, I have worked on various projects ranging from business applications to innovative IoT solutions.",
        "about.info.name": "Full name",
        "about.info.phone": "Phone",
        "about.info.email": "Email",
        "about.info.location": "Location",
        "about.info.follow": "Follow me",

        // Skills section
        "skills.title": "My Skills",
        "skills.subtitle": "Technologies and tools I master",
        "skills.mobile": "Mobile",
        "skills.database": "Databases",

        // Portfolio section
        "portfolio.title": "My Portfolio",
        "portfolio.subtitle": "Discover my recent projects",
        "portfolio.viewDetails": "View details",
        "portfolio.project1.desc": "Web application for sales management",
        "portfolio.project2.desc": "Back office for transaction management",
        "portfolio.project3.desc": "IoT solution with artificial intelligence",
        "portfolio.project4.desc": "Online Money Pool",
        "portfolio.project5.desc": "Online Ticket Sales & Purchase",
        "portfolio.project6.desc": "Online Project",

        // Modals
        "modal.description": "Project Description",
        "modal.details": "Project Details",
        "modal.language": "Languages & Frameworks",
        "modal.results": "Results",

        // Project1
        "modal.project1.description": "Complete e-commerce platform developed for Addinn Paris, enabling sales, user and stock management via an intuitive interface.",
        "modal.project1.detail1": "Design and development of a responsive web application",
        "modal.project1.detail2": "Advanced administration system for account management",
        "modal.project1.detail3": "Analytical dashboard for performance monitoring",
        "modal.project1.detail4": "Integration of secure payments via Stripe",
        "modal.project1.detail5": "Real-time stock management system",
        "modal.project1.results": "The application allowed Addinn Paris to increase online sales by 40% and reduce administrative management time by 30%.",

        // Project2
        "modal.project2.description": "Back-office solution developed for Orange Mali, optimizing the management and configuration of financial services.",
        "modal.project2.detail1": "Development of a dynamic dashboard for transaction tracking",
        "modal.project2.detail2": "Implementation of an advanced reporting system",
        "modal.project2.detail3": "Admin interface for user management",
        "modal.project2.detail4": "Integration with existing financial systems",
        "modal.project2.detail5": "Enhanced security mechanisms for transactions",
        "modal.project2.results": "The solution enabled Orange Mali to reduce transaction errors by 25% and improve issue resolution time by 40%.",

        // Project3
        "modal.project3.description": "IoT solution combining embedded hardware and artificial intelligence to detect and diagnose plant infections in agricultural operations.",
        "modal.project3.detail1": "Design of an IoT device with environmental sensors",
        "modal.project3.detail2": "Development of AI algorithms for plant image analysis",
        "modal.project3.detail3": "Mobile application allowing farmers to scan their plants",
        "modal.project3.detail4": "Web platform for farm monitoring",
        "modal.project3.detail5": "Customized alert and recommendation system",
        "modal.project3.results": "The solution reduced agricultural losses by 35% in pilot regions and received the technological innovation award in Mali.",

        // Project4
        "modal.project4.description": "Online money pool platform enabling funds collection for personal or organizational projects.",
        "modal.project4.detail1": "Integration of secure payment features and a simple end-user interface",
        "modal.project4.detail2": "Management of money pools and contributors",
        "modal.project4.detail3": "User authentication and profile system",
        "modal.project4.detail4": "Payment API integration (MangoPay/PayPal)",
        "modal.project4.detail5": "Dashboard for tracking contributors and contributions",
        "modal.project4.results": "Enables thousands of users to fund their projects and easily collect funds online worldwide.",

        // Project5
        "modal.project5.description": "Online ticketing system linked to the Kwendoo platform, allowing organizers to create, sell and manage event tickets.",
        "modal.project5.detail1": "Event and ticket creation module",
        "modal.project5.detail2": "Sales and participation management",
        "modal.project5.detail3": "QR code generation for ticket validation",
        "modal.project5.detail4": "Payment API integration (MangoPay/PayPal)",
        "modal.project5.detail5": "Integration with Kwendoo's user database",
        "modal.project5.results": "Flexible solution that facilitated the sale of thousands of tickets for various events.",

        // Project6
        "modal.project6.description": "Crowdfunding platform for projects in Africa and the diaspora.",
        "modal.project6.detail1": "Integration of adapted payment methods and complete monitoring of funded projects",
        "modal.project6.detail2": "Implementation of an interface for project carriers",
        "modal.project6.detail3": "Funding tracking and reporting",
        "modal.project6.detail4": "Multi-currency payment management",
        "modal.project6.detail5": "Transaction and data security",
        "modal.project6.results": "Hundreds of projects funded and better visibility for African entrepreneurs.",

        // Contact section
        "contact.title": "Contact Me",
        "contact.subtitle": "Let's talk about your next project",
        "contact.phone": "Phone",
        "contact.email": "Email",
        "contact.location": "Location",
        "contact.website": "Website",
        "contact.form.name": "Your name",
        "contact.form.email": "Your email",
        "contact.form.subject": "Subject",
        "contact.form.message": "Your message",
        "contact.form.send": "Send Message",

        // Footer
        "footer.about": "Full Stack Developer passionate about creating innovative digital solutions for web and mobile.",
        "footer.links": "Quick Links",
        "footer.skills": "Key Skills",
        "footer.skill1": "Web Development",
        "footer.skill2": "Mobile Applications",
        "footer.skill3": "IoT Solutions",
        "footer.skill4": "Artificial Intelligence",
        "footer.skill5": "UX/UI Design",
        "footer.rights": "All rights reserved"
    }
};

// Gestion du changement de langue
let currentLanguage = 'fr';

function setLanguage(lang) {
    currentLanguage = lang;

    // Mettre à jour tous les textes
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });

    // Mettre à jour le bouton de langue
    const langButton = document.getElementById('language-toggle');
    if (langButton) {
        langButton.textContent = lang === 'fr' ? 'EN' : 'FR';
    }


    // Sauvegarder la préférence de langue
    localStorage.setItem('language', lang);

    // Reinitialiser l'animation typing
    if (window.typed) {
        window.typed.destroy();
        initTyped();
    }
}

// Initialiser la langue au chargement
document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('language') || 'fr';
    setLanguage(savedLanguage);

    // Ajouter l'écouteur d'événement sur le bouton de langue
    const langToggle = document.getElementById('language-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            const newLang = currentLanguage === 'fr' ? 'en' : 'fr';
            setLanguage(newLang);
        });
    }

    // Initialiser les autres fonctionnalités JavaScript
    initApp();
});

// Initialiser l'application
function initApp() {
    initTyped();
    initNavigation();
    initScrollProgress();
    initBackToTop();
    initModals();
    initAnimations();
    initActiveLink();
}


// Typing Animation
function initTyped() {
    const strings = currentLanguage === 'fr'
        ? ["Développeur Full Stack", "Développeur Web", "Développeur Mobile", "Concepteur d'Applications"]
        : ["Full Stack Developer", "Web Developer", "Mobile Developer", "Applications Designer"];

    if (document.querySelector(".typing")) {
        window.typed = new Typed(".typing", {
            strings: strings,
            typeSpeed: 80,
            backSpeed: 50,
            loop: true
        });
    }

}

// Navbar Toggler
// Navigation
function initNavigation() {
    const navToggler = document.querySelector(".nav-toggler");
    const navLinks = document.querySelector(".nav-links");

    if (navToggler && navLinks) {
        navToggler.addEventListener("click", () => {
            navToggler.classList.toggle("active");
            navLinks.classList.toggle("active");
            document.body.classList.toggle("no-scroll");
        });
    }


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
        if (header) {
            if (window.scrollY > 100) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        }

    });
}

// Barre de progression
function initScrollProgress() {
    const scrollProgress = document.getElementById("scroll-progress");

    if (scrollProgress) {
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
        });
    }

}



// Back to Top Button -
function initBackToTop() {
    const backToTopBtn = document.getElementById("back-to-top");
    const percent = document.getElementById("percent");

    if (backToTopBtn) {
        let isScrolling = false;

        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 500) {
                backToTopBtn.classList.add("active");
                if (percent) percent.classList.add("active");
            } else {
                backToTopBtn.classList.remove("active");
                if (percent) percent.classList.remove("active");
            }
        });

        backToTopBtn.addEventListener("click", (e) => {
            e.preventDefault();

            if (isScrolling) return;
            isScrolling = true;

            // Utiliser le défilement natif
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

            // Réinitialiser après l'animation
            setTimeout(() => {
                isScrolling = false;
            }, 1000);
        });
    }
}

// Gestion des liens actifs -
function initActiveLink() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    // Fonction pour mettre à jour les liens actifs
    function updateActiveLink() {
        const scrollPosition = window.scrollY + 200;

        // Retirer la classe active de tous les liens
        navLinks.forEach(link => {
            link.classList.remove("active");
        });

        // Trouver la section active
        let activeSection = null;
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                activeSection = section;
            }
        });

        // Ajouter la classe active au lien correspondant
        if (activeSection) {
            const id = activeSection.getAttribute("id");
            const correspondingLink = document.querySelector(`.nav-links a[href="#${id}"]`);

            if (correspondingLink) {
                correspondingLink.classList.add("active");
            }
        }
    }

    // Mettre à jour les liens actifs au scroll
    window.addEventListener("scroll",
        updateActiveLink);

    // Mettre à jour au chargement initial
    updateActiveLink();

    // Gestion manuelle du clic sur les liens
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            // Retirer la classe active de tous les liens
            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            // Ajouter la classe active au lien cliqué
            this.classList.add("active");
        });
    });
}

// Back to Top Button - Version corrigée

// backToTopBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     // Utiliser une méthode plus fiable pour le défilement
//     const scrollToTop = () => {
//         const currentPosition = window.pageYOffset;
//         if (currentPosition > 0) {
//             window.scrollTo(0, Math.max(0, currentPosition - currentPosition / 10));
//             requestAnimationFrame(scrollToTop);
//         }
//     };
//     scrollToTop();
// });

// backToTopBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     // Utiliser une méthode plus fiable pour le défilement
//     const scrollToTop = () => {
//         const currentPosition = window.pageYOffset;
//         if (currentPosition > 0) {
//             window.scrollTo(0, Math.max(0, currentPosition - currentPosition / 10));
//             requestAnimationFrame(scrollToTop);
//         }
//     };
//     scrollToTop();
// })



// Active Section
// const sections = document.querySelectorAll("section");
// const navLinksItems = document.querySelectorAll(".nav-links a");
//
// window.addEventListener("scrolled", () => {
//     let current = '';
//
//     sections.forEach(section => {
//         const sectionTop = section.offsetTop;
//         const sectioHeight = section.clientHeight;
//
//         if (pageYOffset >= sectionTop - 300) {
//             current = section.getAttribute("id");
//         }
//     });
//
//     navLinksItems.forEach(link => {
//         link.classList.remove("active");
//         if (link.getAttribute("href").includes(current)) {
//             link.classList.add("active");
//         }
//     });
// });


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

// Animations on scroll
function initAnimations() {
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
    });

    // Trigger animations
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
}

// Gestion des modals pour les projets
function initModals() {
    const projectButtons = document.querySelectorAll('.view-project');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-modal');

    projectButtons.forEach(button => {
        button.addEventListener('click', () => {
            const projectId = button.getAttribute('data-project');
            const modal = document.getElementById(`project-modal-${projectId}`);

            if (modal) {
                modal.classList.add('active');
                document.body.classList.add('no-scroll');
            }

        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');

            if (modal) {
                modal.classList.remove('active');
                document.body.classList.remove('no-scroll');
            }

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
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                modal.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        }
    });
}


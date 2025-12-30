
document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('site-header');
    const themeToggle = document.getElementById('themeToggle');
    const menuToggle = document.getElementById('menuToggle');
    const closeMenu = document.getElementById('closeMenu');
    const mobileMenu = document.getElementById('mobileMenu');
    const body = document.body;
    const navLinks = document.querySelectorAll('.mobile-nav a');

    // Theme toggle functionality
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark');
        localStorage.setItem('hsn_theme', body.classList.contains('dark') ? 'dark' : 'light');
    });

    // Mobile menu functionality
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.add('open');
        body.style.overflow = 'hidden';
    });

    closeMenu.addEventListener('click', () => {
        closeMobileMenu();
    });

    // Close menu when clicking outside
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            closeMobileMenu();
        }
    });

    // Close menu when navigation links are clicked + handle navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');

            // Check if it's a section link (starts with #) or external page
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);

                // Close menu first
                closeMobileMenu();

                // Then scroll to section
                setTimeout(() => {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 100);
            } else {
                // For external pages like references.html, just close the menu
                // and let the default link behavior proceed
                closeMobileMenu();
            }
        });
    });

    // Close menu with ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMobileMenu();
        }
    });

    // Shrink header on scroll
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const sc = window.scrollY || window.pageYOffset;
        if (sc > 40) {
            header.classList.add('shrink');
        } else {
            header.classList.remove('shrink');
        }
        lastScroll = sc;
    });

    // Load saved theme
    const savedTheme = localStorage.getItem('hsn_theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark');
    }

    // Function to close mobile menu
    function closeMobileMenu() {
        mobileMenu.classList.remove('open');
        body.style.overflow = '';
    }
});



document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.value-card, .stat-box');

    items.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';

        setTimeout(() => {
            item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 200 * index);
    });
});


// Number animation function
function animateNumbers() {
    const statBoxes = document.querySelectorAll('.stat-box');

    statBoxes.forEach(box => {
        const numberElement = box.querySelector('.stat-number');
        const finalValue = parseInt(numberElement.textContent);
        const duration = 2000; // Animation duration in ms
        const steps = 100; // Number of steps
        const increment = finalValue / steps;
        let currentValue = 0;

        // Update the number gradually
        const timer = setInterval(() => {
            currentValue += increment;
            if (currentValue >= finalValue) {
                currentValue = finalValue;
                clearInterval(timer);
            }
            numberElement.textContent = Math.round(currentValue) + (numberElement.textContent.includes('%') ? '%' : '+');
        }, duration / steps);
    });
}

// Call the function when the element is in viewport
function initNumberAnimation() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumbers();
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.about-stats');
    if (statsSection) {
        observer.observe(statsSection);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initNumberAnimation);






// FAQ Accordion Functionality
document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // Open first FAQ by default
    if (faqItems.length > 0) {
        faqItems[0].classList.add('active');
    }
});







// Service detail content (in German)
const serviceDetails = {
    stahlbau: {
        title: "Stahlbau & Konstruktionen",
        image: "https://images.unsplash.com/photo-1581094288338-231b058b38b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Hallen, Tragwerke, Balkone, Carports – präzise gefertigt und zuverlässig montiert.",
        details: `<p>Wir realisieren maßgeschneiderte Stahlbau-Lösungen für gewerbliche und private Bauvorhaben. Unsere Stahlkonstruktionen zeichnen sich durch höchste Präzision, Stabilität und Langlebigkeit aus.</p>
                 <ul>
                   <li>Industriehallen und Werksbauten</li>
                   <li>Tragwerke und Stützsysteme</li>
                   <li>Balkone und Vordächer</li>
                   <li>Carports und Überdachungen</li>
                   <li>Statische Berechnungen</li>
                 </ul>
                 <p>Von der Planung bis zur Montage: Wir begleiten Ihr Projekt mit unserem umfassenden Know-how.</p>`
    },
    treppen: {
        title: "Treppen & Geländer",
        image: "https://images.unsplash.com/photo-1530026186672-85ccb462155d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Innen- und Außentreppen, Geländer aus Stahl, Edelstahl oder Glas – sicher & modern.",
        details: `<p>Wir fertigen Treppen und Geländer in höchster handwerklicher Qualität – funktional, sicher und ästhetisch anspruchsvoll.</p>
                 <ul>
                   <li>Individuelle Innentreppen</li>
                   <li>Wetterfeste Außentreppen</li>
                   <li>Geländer aus Edelstahl, Stahl oder Glas</li>
                   <li>Barrierefreie Lösungen</li>
                   <li>Modernes Design oder klassische Ausführungen</li>
                 </ul>
                 <p>Unsere Treppen und Geländer verbinden Sicherheit mit anspruchsvollem Design.</p>`
    },
    // Add similar content for other services...
};

// Modal functionality
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('service-modal');
    const modalBody = document.querySelector('.modal-body');
    const closeBtn = document.querySelector('.modal-close');

    // Open modal on button click
    document.querySelectorAll('.bento-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            const service = this.closest('.bento-item').dataset.service;
            openModal(service);
        });
    });

    // Also open modal when clicking on the bento item itself
    document.querySelectorAll('.bento-item').forEach(item => {
        item.addEventListener('click', function () {
            const service = this.dataset.service;
            openModal(service);
        });
    });

    // Close modal
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', function (e) {
        if (e.target === modal) closeModal();
    });

    // Close with ESC key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeModal();
    });

    function openModal(service) {
        const detail = serviceDetails[service];
        if (detail) {
            modalBody.innerHTML = `
                <div class="modal-header">
                    <h2>${detail.title}</h2>
                    <p>${detail.description}</p>
                </div>
                <div class="modal-image">
                    <img src="${detail.image}" alt="${detail.title}">
                </div>
                <div class="modal-text">
                    ${detail.details}
                </div>
                <div class="modal-actions">
                    <a href="#contact" class="accent-btn">Kostenlose Beratung anfragen</a>
                </div>
            `;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
});








// TEAM
// Team Carousel Functionality
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel-container');
    const prevBtn = document.querySelector('.carousel-control.prev');
    const nextBtn = document.querySelector('.carousel-control.next');
    const members = document.querySelectorAll('.team-member');
    const indicatorsContainer = document.querySelector('.carousel-indicators');

    // Create indicators
    members.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => {
            scrollToMember(index);
        });
        indicatorsContainer.appendChild(indicator);
    });

    const indicators = document.querySelectorAll('.indicator');

    // Scroll to specific member
    function scrollToMember(index) {
        const memberWidth = members[0].offsetWidth + 32; // width + gap
        carousel.scrollTo({
            left: index * memberWidth,
            behavior: 'smooth'
        });
        updateIndicators(index);
    }

    // Update active indicator
    function updateIndicators(activeIndex) {
        indicators.forEach((indicator, index) => {
            if (index === activeIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    // Next button
    nextBtn.addEventListener('click', () => {
        const scrollAmount = members[0].offsetWidth + 32;
        carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    // Previous button
    prevBtn.addEventListener('click', () => {
        const scrollAmount = members[0].offsetWidth + 32;
        carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    // Update indicators on scroll
    carousel.addEventListener('scroll', () => {
        const scrollPosition = carousel.scrollLeft;
        const memberWidth = members[0].offsetWidth + 32;
        const activeIndex = Math.round(scrollPosition / memberWidth);
        updateIndicators(activeIndex);
    });

    // Toggle member details
    const toggleButtons = document.querySelectorAll('.member-toggle');
    toggleButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.stopPropagation();
            const details = this.closest('.team-member').querySelector('.member-details');
            details.classList.toggle('active');

            if (details.classList.contains('active')) {
                this.textContent = 'Weniger anzeigen';
            } else {
                this.textContent = 'Mehr erfahren';
            }
        });
    });
});




// WHATSAPP
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const whatsappBtn = document.getElementById('whatsapp-btn');

    // Regular form submission (if you want to keep it)
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // Your existing form handling code here
    });

    // WhatsApp button functionality
    whatsappBtn.addEventListener('click', function (e) {
        e.preventDefault();

        // Get form values
        const name = encodeURIComponent(contactForm.name.value);
        const email = encodeURIComponent(contactForm.email.value);
        const phone = encodeURIComponent(contactForm.phone.value);
        const message = encodeURIComponent(contactForm.message.value);

        // Vérification des champs obligatoires
        if (!name || !email || !message) {
            alert('Veuillez remplir tous les champs obligatoires (Nom, E-mail, Message)');
            return;
        }

        // Création du message WhatsApp
        const whatsappMessage = `Nouvelle demande depuis le site YANA DECOR :%0A%0A` +
            `Nom : ${name}%0A` +
            `E-mail : ${email}%0A` +
            `Téléphone : ${phone}%0A` +
            `Message : ${message}`;

        // URL WhatsApp – remplacez par le numéro de Yana Decor
        const whatsappURL = `https://wa.me/+212682438684?text=${whatsappMessage}`;

        // Redirection vers WhatsApp
        window.open(whatsappURL, '_blank');

    });
});















// References Gallery Functionality
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const referenceItems = document.querySelectorAll('.reference-item');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImage = document.querySelector('.lightbox-image');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const lightboxClose = document.querySelector('.lightbox-close');
    const viewButtons = document.querySelectorAll('.reference-view');

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            // Get filter value
            const filterValue = button.getAttribute('data-filter');

            // Filter items
            referenceItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Lightbox functionality
    viewButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.stopPropagation();
            const referenceItem = this.closest('.reference-item');
            const image = referenceItem.querySelector('img');
            const category = referenceItem.querySelector('.reference-category').textContent;

            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;
            lightboxCaption.textContent = `${category} - ${image.alt}`;

            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close lightbox
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Close with ESC key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Also open lightbox when clicking on the image
    referenceItems.forEach(item => {
        item.addEventListener('click', function () {
            const image = this.querySelector('img');
            const category = this.querySelector('.reference-category').textContent;

            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;
            lightboxCaption.textContent = `${category} - ${image.alt}`;

            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
});

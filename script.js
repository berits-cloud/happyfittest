// Fade Up Animation
document.addEventListener('DOMContentLoaded', function() {
    // Elements to animate
    const selectors = [
        '.section-header',
        '.feature-card',
        '.stat-item',
        '.location-card',
        '.pricing-card',
        '.pricing-card-small',
        '.contact-info',
        '.contact-form',
        '.hero-content',
        '.hero-buttons',
        '.timeline-desktop > div',
        '.timeline-card',
        '.about-founders-grid',
        '.about-founders-image',
        '.about-founders-text',
        '.team-deutschland-grid > div',
        '.footer-social',
        '.contact-grid',
        '.features-grid',
        '.locations-grid',
        '.news-card'
    ];

    // Add fade-up class to elements
    selectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.add('fade-up');
        });
    });

    // Intersection Observer for fade-up
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all fade-up elements
    document.querySelectorAll('.fade-up').forEach(el => {
        observer.observe(el);
    });

    // Counter Animation
    const statsSection = document.querySelector('.stats');
    let countersAnimated = false;

    if (statsSection) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !countersAnimated) {
                    countersAnimated = true;
                    animateCounters();
                }
            });
        }, { threshold: 0.5 });

        counterObserver.observe(statsSection);
    }

    function animateCounters() {
        const allCounters = document.querySelectorAll('[data-target]');

        allCounters.forEach(counter => {
            const target = parseInt(counter.dataset.target);
            const suffix = counter.dataset.suffix || '';
            const duration = target <= 1 ? 400 : 1500;
            const steps = 60;
            const increment = target / steps;
            let current = 0;
            const stepTime = duration / steps;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                    counter.textContent = target + suffix;

                    // Pop effect on parent stat-number
                    const statNumber = counter.closest('.stat-number') || counter;
                    statNumber.classList.add('pop');
                } else {
                    counter.textContent = Math.floor(current) + suffix;
                }
            }, stepTime);
        });
    }
});

// Mobile menu toggle
function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}

// Carousel scroll function
function scrollCarousel(dir) {
    var el = document.getElementById('benefitsCarousel');
    if (el) {
        el.scrollLeft = el.scrollLeft + (dir * 300);
    }
}

// Lightbox functions
function openLightbox(src) {
    var lightbox = document.getElementById('lightbox');
    var img = document.getElementById('lightbox-img');
    img.src = src;
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    var lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Initialize carousel arrows
document.addEventListener('DOMContentLoaded', function() {
    var prevBtn = document.querySelector('.carousel-arrow.prev');
    var nextBtn = document.querySelector('.carousel-arrow.next');
    var carousel = document.getElementById('benefitsCarousel');

    if (prevBtn && carousel) {
        prevBtn.addEventListener('click', function() {
            carousel.scrollLeft -= 300;
        });
    }

    if (nextBtn && carousel) {
        nextBtn.addEventListener('click', function() {
            carousel.scrollLeft += 300;
        });
    }
});

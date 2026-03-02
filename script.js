// ==================== STATE ====================
let currentSlide = 0;
const totalSlides = 9;
let isAnimating = false;

// ==================== DOM ====================
const slides = document.querySelectorAll('.slide');
const navItems = document.querySelectorAll('.nav-item');
const sidebar = document.getElementById('sidebar');
const hamburger = document.getElementById('hamburger');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const startBtn = document.getElementById('startBtn');
const progressFill = document.getElementById('progressFill');
const slideCounter = document.getElementById('slideCounter');
const keyboardHint = document.getElementById('keyboardHint');
const loader = document.getElementById('loader');
const particleField = document.getElementById('particleField');

// ==================== LOADER ====================
window.addEventListener('load', () => {
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 2000);
});

// ==================== PARTICLES ====================
function createParticles() {
    if (!particleField) return;
    for (let i = 0; i < 30; i++) {
        const p = document.createElement('div');
        p.classList.add('particle');
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (Math.random() * 8 + 6) + 's';
        p.style.animationDelay = (Math.random() * 6) + 's';
        p.style.width = p.style.height = (Math.random() * 3 + 2) + 'px';
        p.style.opacity = Math.random() * 0.5 + 0.1;
        particleField.appendChild(p);
    }
}
createParticles();

// ==================== NAVIGATION ====================
function goToSlide(index) {
    if (isAnimating || index === currentSlide || index < 0 || index >= totalSlides) return;
    isAnimating = true;

    const direction = index > currentSlide ? 1 : -1;
    const currentEl = slides[currentSlide];
    const nextEl = slides[index];

    // Current slide exits
    currentEl.classList.remove('active');
    if (direction > 0) currentEl.classList.add('exit-left');
    currentEl.style.transform = direction > 0 ? 'translateX(-60px)' : 'translateX(60px)';
    currentEl.style.opacity = '0';

    // Next slide enters
    nextEl.style.transform = direction > 0 ? 'translateX(60px)' : 'translateX(-60px)';
    nextEl.style.opacity = '0';
    nextEl.style.visibility = 'visible';

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            nextEl.classList.add('active');
            nextEl.style.transform = '';
            nextEl.style.opacity = '';
        });
    });

    // Update nav
    navItems.forEach(item => item.classList.remove('active'));
    navItems[index].classList.add('active');

    // Update progress
    currentSlide = index;
    updateProgress();

    // Cleanup
    setTimeout(() => {
        currentEl.classList.remove('exit-left');
        currentEl.style.transform = '';
        currentEl.style.opacity = '';
        currentEl.style.visibility = '';
        isAnimating = false;
    }, 600);

    // Hide keyboard hint after first navigation
    if (keyboardHint) keyboardHint.classList.add('hidden');

    // Scroll slide to top
    nextEl.scrollTop = 0;
}

function updateProgress() {
    const pct = ((currentSlide + 1) / totalSlides) * 100;
    progressFill.style.width = pct + '%';
    slideCounter.textContent = `${currentSlide + 1} / ${totalSlides}`;
}

function nextSlide() {
    if (currentSlide < totalSlides - 1) goToSlide(currentSlide + 1);
}

function prevSlide() {
    if (currentSlide > 0) goToSlide(currentSlide - 1);
}

// ==================== EVENT LISTENERS ====================

// Nav items
navItems.forEach(item => {
    item.addEventListener('click', () => {
        const idx = parseInt(item.dataset.slide);
        goToSlide(idx);
        // Close sidebar on mobile
        if (window.innerWidth <= 1024) {
            sidebar.classList.remove('open');
            hamburger.classList.remove('active');
        }
    });
});

// Module chips on hero
document.querySelectorAll('.module-chip').forEach(chip => {
    chip.addEventListener('click', () => {
        const idx = parseInt(chip.dataset.slide);
        goToSlide(idx);
    });
});

// Start button
startBtn.addEventListener('click', nextSlide);

// Control buttons
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Hamburger
hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    hamburger.classList.toggle('active');
});

// Keyboard
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
    } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
    } else if (e.key === 'Escape') {
        sidebar.classList.remove('open');
        hamburger.classList.remove('active');
    }
});

// Touch / Swipe support
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 60) {
        if (diff > 0) nextSlide();
        else prevSlide();
    }
}, { passive: true });

// Close sidebar on click outside (mobile)
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 1024 &&
        sidebar.classList.contains('open') &&
        !sidebar.contains(e.target) &&
        !hamburger.contains(e.target)) {
        sidebar.classList.remove('open');
        hamburger.classList.remove('active');
    }
});

// Intersection observer for card animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeUp 0.5s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.content-card, .m-card, .rag-step').forEach(el => {
    observer.observe(el);
});

// Initialize
updateProgress();

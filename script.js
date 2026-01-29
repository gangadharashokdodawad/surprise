/* Global Scripts */

// Helper to add 'active' class to current nav link
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Add specific page initialization if needed
    // Pages handle their own initialization via inline scripts
});

/* Particle Background Effect (Simple Version) */
function createParticles(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return; // Exit if container not found

    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Random positioning and animation
        const size = Math.random() * 5 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.background = `rgba(255, 255, 255, ${Math.random() * 0.5})`;
        particle.style.position = 'absolute';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.borderRadius = '50%';
        particle.style.animation = `float ${Math.random() * 3 + 2}s infinite ease-in-out`;

        container.appendChild(particle);
    }
}

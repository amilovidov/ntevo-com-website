// Main TypeScript file for ntevo.com

// Smooth scroll behavior for any anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href') || '');
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Hero CTA button handler - opens email to info@ntevo.com
const heroCta = document.querySelector('.hero-cta');
if (heroCta) {
  heroCta.addEventListener('click', () => {
    window.location.href = 'mailto:info@ntevo.com?subject=Inquiry about Integrity Evolution AI Agents';
  });
}

// Log when the page is loaded
console.log('ntevo.com website loaded successfully');

document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeInUp');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('#about .card, #about .rounded-circle, #about h2').forEach(el => {
        observer.observe(el);
    });

    document.querySelectorAll('#about p i').forEach(icon => {
        icon.parentElement.addEventListener('mouseenter', () => {
            icon.style.transform = 'rotate(360deg)';
        });
    });
});

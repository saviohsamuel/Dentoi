export function initObserver() {
    const allElements = document.querySelectorAll('.card-service, .card-team, .testimonial-card, .card-blog');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.2
    });
    allElements.forEach((el, index) => {
        el.style.transitionDelay = `${index * .1}s`; // delay progressivo
        observer.observe(el);
    });
};
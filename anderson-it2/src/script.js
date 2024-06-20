document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.animated-element');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else if (entry.boundingClientRect.top > 0) {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});

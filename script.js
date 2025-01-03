document.addEventListener("DOMContentLoaded", function() {
    const projectNameSelector = '.project-name';
    const highlightEffectSelector = '.highlight-effect';
    const leftUnderlineAnimationSelector = '.left-underline-animation';

    const elementsToObserve = [
        ...document.querySelectorAll(projectNameSelector),
        ...document.querySelectorAll(highlightEffectSelector),
        ...document.querySelectorAll(leftUnderlineAnimationSelector)
    ];

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Adjusted for testing
    };

    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            console.log('Intersecting:', entry.isIntersecting, entry.target);
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    elementsToObserve.forEach(element => {
        observer.observe(element);
    });
});
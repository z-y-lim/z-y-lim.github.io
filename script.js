document.addEventListener("DOMContentLoaded", function() {
    const projectNames = document.querySelectorAll('.project-name');

    const observerOptions = {
        root: null, // Use the viewport as the container
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'visible' class when the element is in view
                entry.target.classList.add('visible');
                // Optionally, unobserve the element after it becomes visible
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    projectNames.forEach(project => {
        observer.observe(project);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const highlightElements = document.querySelectorAll('.highlight-effect-yellow, .highlight-effect-green, .highlight-effect-light-blue');

    const observerOptions = {
        root: null, // Use the viewport as the container
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Determine the delay based on the class of the element
                let delay = 5000; // Default delay of 5 seconds for highlight effects
                if (entry.target.classList.contains('highlight-effect-light-blue')) {
                    delay = 2000; // 2 seconds for the center underline effect
                }

                // Add the 'visible' class with a delay
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);

                // Optionally, unobserve the element after it becomes visible
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    highlightElements.forEach(element => {
        observer.observe(element);
    });
});
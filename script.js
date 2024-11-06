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
    let inViewCount = 0; // Count of elements in view
    const totalElements = highlightElements.length; // Total number of highlight elements
    const delay = 2000; // Set a common delay of 5 seconds for all highlight effects

    const observerOptions = {
        root: null, // Use the viewport as the container
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Increment count of elements in view
                inViewCount++;

                // If all elements are in view, trigger the animation
                if (inViewCount === totalElements) {
                    highlightElements.forEach(element => {
                        // Add the 'visible' class with a common delay
                        setTimeout(() => {
                            element.classList.add('visible');
                        }, delay);
                    });

                    // Unobserve all elements after they become visible
                    highlightElements.forEach(element => {
                        observer.unobserve(element);
                    });
                }
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    highlightElements.forEach(element => {
        observer.observe(element);
    });
});
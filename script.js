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
    // Select all highlight elements (yellow, green, blue)
    const highlightElements = document.querySelectorAll('.highlight-effect-yellow, .highlight-effect-green, .highlight-effect-light-blue');

    // Observer options (trigger animation when 10% of the element is in view)
    const observerOptions = {
        root: null, // Use the viewport as the container
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    // Callback for IntersectionObserver
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            // Check if the element is in view
            if (entry.isIntersecting) {
                // Add 'visible' class when the element is in view
                entry.target.classList.add('visible');
                // Optionally, unobserve the element after it becomes visible
                observer.unobserve(entry.target);
            }
        });
    };

    // Create the IntersectionObserver instance
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each highlight element individually
    highlightElements.forEach(element => {
        observer.observe(element);
    });
});
const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Delay the animation if needed
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, 3000); // Delay of 500ms (adjust as needed)

            // Unobserve the element once it becomes visible
            observer.unobserve(entry.target);
        }
    });
};

document.addEventListener("DOMContentLoaded", function() {
    const underlineElements = document.querySelectorAll('.left-underline-animation');
  
    const observerOptions = {
      root: null, // Use the viewport as the container
      rootMargin: '0px',
      threshold: 0.1 // Trigger when 10% of the element is visible
    };
  
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the 'visible' class when the element comes into view
          entry.target.classList.add('visible');
          // Optionally, unobserve the element after it becomes visible
          observer.unobserve(entry.target);
        }
      });
    };
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
  
    // Observe each element with the left-underline-animation class
    underlineElements.forEach(element => {
      observer.observe(element);
    });
  });
  

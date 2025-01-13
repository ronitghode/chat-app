function adjustPageWidth() {
    const screenWidth = window.innerWidth;
    const bodyElement = document.body;

    if (screenWidth >= 992 && screenWidth <= 1600) {
        // Shrink the page by 90% for screen width between 992px and 1600px
        bodyElement.style.transform = 'scale(0.9)';
        bodyElement.style.transformOrigin = 'top left';
    } else if (screenWidth >= 700 && screenWidth <= 767) {
        // Shrink the page by 80% for screen width between 700px and 767px
        bodyElement.style.transform = 'scale(0.8)';
        bodyElement.style.transformOrigin = 'top left';
    } else if (screenWidth >= 600 && screenWidth < 700) {
        // Shrink the page to 75% for screen width between 600px and 700px
        bodyElement.style.transform = 'scale(0.75)';
        bodyElement.style.transformOrigin = 'top left';
    } else if (screenWidth <= 600) {
        // Shrink the page to 50% for screen width less than or equal to 600px
        bodyElement.style.transform = 'scale(0.5)';
        bodyElement.style.transformOrigin = 'top left';
    } else {
        // Default scale for larger screens
        bodyElement.style.transform = 'scale(1)';
        bodyElement.style.transformOrigin = 'top left';
    }
}

// Call the function on page load
window.addEventListener('load', adjustPageWidth);

// Call the function on window resize to adapt to screen changes
window.addEventListener('resize', adjustPageWidth);

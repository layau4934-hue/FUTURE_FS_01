document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio Loaded!");
    
    // Smooth scrolling for navigation (if you add links later)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

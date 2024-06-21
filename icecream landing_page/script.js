document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelector('.navlinks');
    const menuToggle = document.querySelector('.menu-toggle');
    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
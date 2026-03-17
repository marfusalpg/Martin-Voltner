document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu li a');
    const navbar = document.querySelector('.navbar-container');

    // toggle hamburger
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // zavření menu po kliknutí na odkaz
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // zavření menu, pokud navbar zmizí z viewportu při scrollu
    window.addEventListener('scroll', () => {
        const rect = navbar.getBoundingClientRect();
        if (rect.bottom < 0) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});
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

    // ==========================
    // Custom iPad-like cursor
    // ==========================
    const cursor = document.getElementById('cursor');

    document.addEventListener('mousemove', e => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    const interactiveElements = document.querySelectorAll('a, button, .nav-menu li a');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.8)';
            cursor.style.background = 'rgba(0,0,0,0.3)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.background = 'rgba(0,0,0,0.5)';
        });
    });
});
//!TOGGLE NAVIGATION MENU AND ICONS
const menuToggleButton = document.querySelector('.menu-toggle-button')
const menu = document.querySelector('.menu')

menuToggleButton.addEventListener('click', () => {
    menu.classList.toggle('active')
    menuToggleButton.classList.toggle('active')
});

// !REMOVE ACTIVE CLASS FROM AND ICON ON LINK CLICK
const listLink = document.querySelectorAll('.list-link');

listLink.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active')
        menuToggleButton.classList.remove('active')
    });
});

// !TOGGLE THEME AND STORE SELECTION WITHIN LOCAL STORAGE
const themeToggleButton = document.querySelector('.theme-toggle-button')
const body = document.body
const currentTheme = localStorage.getItem('Dark')

if (currentTheme) {
    body.classList.add('dark-theme')
}

themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme')

    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('Dark', 'active')
    }
    else {
        localStorage.clear()
    }
})

// !SCROLL REVEAL
const sr = ScrollReveal({
    distance: '50px',
    duration: 1500,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
})

sr.reveal('.main-title', {
    origin: 'top'
})
sr.reveal('.scroll-reveal-left', {
    origin: 'left'
})
sr.reveal('.scroll-reveal-right', {
    origin: 'right'
})
sr.reveal('.tech-stack-item', {
    interval: 250
})
sr.reveal('.section-title, .section-subtitle-container', {
    origin: 'top',
    interval: 250
})
sr.reveal('.portfolio-card', {
    interval: 500
})
sr.reveal('.form-container, .footer', {
    origin: 'top'
})
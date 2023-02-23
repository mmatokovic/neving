import "instant.page"
import "autotrack"
import Alpine from 'alpinejs';

window.Alpine = Alpine;
Alpine.start();

window.addEventListener('scroll', function() {

    const btt = document.getElementById('btt') as HTMLDivElement;
  
    if (window.scrollY >= 1080) {
        btt.classList.remove('hidden');
        btt.classList.add('block');
    } else {
        btt.classList.add('hidden');
        btt.classList.remove('block');
    }

});

const hamburger = document.getElementById("hamburger-btn");
if (hamburger != null) {
    const mobile = document.getElementById("mobile-menu") as HTMLElement;

    hamburger.addEventListener('click', () => {
        mobile.toggleAttribute("hidden");
    });
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js');
    });
}

const close = document.getElementById("close-btn");
if (close != null) {
    const mobile = document.getElementById("mobile-menu") as HTMLElement;

    close.addEventListener('click', () => {
        mobile.toggleAttribute("hidden");
    });
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js');
    });
}
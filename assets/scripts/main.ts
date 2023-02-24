import "instant.page"
import "autotrack"
import Alpine from 'alpinejs';
import intersect from '@alpinejs/intersect'
 
Alpine.plugin(intersect)
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

function animatedCounter(targer, time = 200, start = 0) {
    return {
      current: 0,
      target: targer,
      time: time,
      start: start,
      updatecounter: function() {
        start = this.start;
        const increment = (this.target - start) / this.time;
        const handle = setInterval(() => {
          if (this.current < this.target)
            this.current += increment
          else {
            clearInterval(handle);
            this.current = this.target
          }
        }, 1);
      }
    };
  }
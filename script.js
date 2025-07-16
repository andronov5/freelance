/* ----------  MOBILE NAV  ---------- */
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => nav.classList.toggle('open'));

/* ----------  SCROLL‑FADE + SLIDER  ---------- */
const options = { threshold: 0.15 };
const faders = document.querySelectorAll('.section, .card, .section‑img');
const observer = new IntersectionObserver(reveal, options);

function reveal(entries, obs) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade‑in');
      obs.unobserve(entry.target);
    }
  });
}
faders.forEach(el => observer.observe(el));

/* ----------  TESTIMONIAL SLIDER  ---------- */
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let cur = 0;

function updateSlides(dir = 1) {
  slides[cur].classList.remove('active');
  cur = (cur + dir + slides.length) % slides.length;
  slides[cur].classList.add('active');
}
prevBtn.addEventListener('click', () => updateSlides(-1));
nextBtn.addEventListener('click', () => updateSlides(1));

/* Autoplay every 8 s (pause on hover) */
let play = setInterval(updateSlides, 8000);
document.querySelector('.slider').addEventListener('mouseenter', () => clearInterval(play));
document.querySelector('.slider').addEventListener('mouseleave', () => play = setInterval(updateSlides, 8000));

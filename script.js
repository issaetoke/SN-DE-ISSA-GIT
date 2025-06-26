// Burger menu toggle
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
burger.addEventListener('click', ()=> {
  burger.classList.toggle('active');
  menu.classList.toggle('open');
});

// Carrousel infini JS
const slideContainer = document.querySelector('.slides');
let idx = 0;
const total = slideContainer.children.length;
function moveCarousel(){
  idx = (idx+1) % total;
  slideContainer.style.transform = `translateX(${-600 * idx}px)`;
}
setInterval(moveCarousel, 3000);

// GSAP scroll animations
gsap.registerPlugin(ScrollTrigger);
gsap.from(".scroll-section", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".scroll-section",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});

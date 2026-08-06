import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from 'gsap';

window.addEventListener('DOMContentLoaded', () => {
  AOS.init({ once: true });

  // Simple entrance animation for hero text
  const hero = document.querySelector('.hero-title');
  if (hero) gsap.from(hero, { y: 20, opacity: 0, duration: 0.8, ease: 'power2.out' });

  // Placeholder for bubble cursor / interactions
  document.body.addEventListener('mousemove', (e) => {
    // lightweight placeholder; real implementation later
  });
});

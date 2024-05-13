import gsap from 'gsap';

const TL = gsap.timeline({ defaults: { duration: 1 } });

TL.from('.hero-img', { opacity: 0, scale: 2 }, { ease: 'expoScale' })
  .from('.home-header', { opacity: 0, y: 300 }, { ease: 'expoScale' })
  .from('.home-btn', { opacity: 0, y: 500 }, { delay: 1, ease: 'expoScale' });

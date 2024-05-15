import { gsap } from 'gsap';
import Lenis from 'lenis';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  lerp: 0.1,
  smooth: true,
});

lenis.on('scroll', (e) => {});

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

////////////////////

gsap.to('.hero-img', {
  y: -300,
  opacity: 0,
  scrollTrigger: {
    trigger: '#Nosotros',
    scrub: 1,
    start: 'top 80%',
    end: 'top 10%',
  },
});
gsap.to('.home-header', {
  y: -200,
  opacity: 0,
  scrollTrigger: {
    trigger: '#Nosotros',
    scrub: 1,
    start: 'top 80%',
    end: 'top 10%',
  },
});
gsap.to('.home-btn', {
  y: -100,
  opacity: 0,
  scrollTrigger: {
    trigger: '#Nosotros',
    scrub: 1,
    start: 'top 80%',
    end: 'top 10%',
  },
});

/////////////////////////////////

gsap.from('.bio', {
  opacity: 0,
  scrollTrigger: {
    trigger: '#Nosotros',
    scrub: 1,
    start: 'top 50%',
    end: 'top 10%',
  },
});
gsap.from('.bio-p', {
  y: 300,
  stagger: 0.5,
  duration: 1,
  scrollTrigger: {
    trigger: '#Nosotros',
    scrub: 1,
    start: 'top 40%',
    end: 'top 10%',
  },
});
gsap.from('.references', {
  y: 300,
  scrollTrigger: {
    trigger: '#Nosotros',
    scrub: 1,
    start: 'top 40%',
    end: 'top 10%',
  },
});
gsap.from('.ref-icon', {
  y: 300,
  stagger: 0.5,
  duration: 1,
  scrollTrigger: {
    trigger: '#Nosotros',
    scrub: 1,
    start: 'top 15%',
    end: 'top 5%',
  },
});

///////////////////////////////

gsap.from('.servicios-header', {
  y: 200,
  opacity: 0,
  stagger: 0.5,
  duration: 1,
  scrollTrigger: {
    trigger: '#Servicios',
    scrub: 1,
    start: 'top 75%',
    end: 'top 5%',
  },
});
gsap.from('.cards', {
  y: 700,
  scrollTrigger: {
    trigger: '#Servicios',
    scrub: 1,
    start: 'top 60%',
    end: 'top 5%',
  },
});

gsap.from('.card', {
  scale: 0,
  opacity: 0,
  ease: 'expoScale',
  stagger: {
    amount: 2,
  },
  scrollTrigger: {
    trigger: '#Servicios',
    scrub: 1,
    start: 'top 30%',
    end: 'top 5%',
  },
});
gsap.to('.card', {
  y: -200,
  scale: 0,
  opacity: 0,
  ease: 'expoScale',
  stagger: { each: 2 },
  scrollTrigger: {
    trigger: '#Contacto',
    scrub: 1,
    start: 'top 80%',
    end: 'top 20%',
  },
});

//////////////////////////////

gsap.from('.items-contacto', {
  y: 300,
  opacity: 0,
  ease: 'expoScale',
  scrollTrigger: {
    trigger: '#Contacto',
    scrub: 1,
    start: 'top 80%',
    end: 'top 20%',
  },
});
gsap.from('.map', {
  scale: 0,
  y: 400,
  opacity: 0,
  ease: 'expoScale',
  scrollTrigger: {
    trigger: '#Contacto',
    scrub: 1,
    start: 'top 50%',
    end: 'top 20%',
  },
});

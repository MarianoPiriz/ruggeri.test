import gsap from 'gsap';

const smallDevice = window.matchMedia('(max-width: 1024px)');
const dropDownMenu = document.querySelector('.link-items');
const bars = document.querySelectorAll('.bar');

window.addEventListener('click', (e) => {
  if (e.target.matches('.hamburger-menu') || e.target.matches('.nav-link')) {
    if (smallDevice.matches) {
      if (!dropDownMenu.classList.contains('Open')) {
        dropDownMenu.classList.add('Open');
        burgerMenuAnimationOpen();
      } else {
        burgerMenuAnimationClose();
      }
    }
  }
});
function burgerMenuAnimationOpen() {
  bars.forEach((bar, key) => {
    bar.setAttribute('id', bar.className + key);

    switch (bar.id) {
      case 'bar0': {
        gsap.to('#bar0', {
          transform: 'rotate(45deg)',
          translateY: '-0.7rem',
          duration: 0.5,
          ease: 'expoScale',
        });
      }
      case 'bar1': {
        gsap.to('#bar1', { opacity: 0, duration: 0.5, ease: 'expoScale' });
      }
      case 'bar2': {
        gsap.to('#bar2', {
          transform: 'rotate(-45deg)',
          duration: 0.5,
          ease: 'expoScale',
        });
      }
    }
  });
  gsap.to(dropDownMenu, {
    translateY: '0%',
  });
}
function burgerMenuAnimationClose() {
  dropDownMenu.classList.remove('Open');
  bars.forEach((bar, key) => {
    bar.setAttribute('id', bar.className + key);

    switch (bar.id) {
      case 'bar0': {
        gsap.to('#bar0', {
          transform: 'rotate(0deg)',
          duration: 0.5,
          ease: 'expoScale',
        });
      }
      case 'bar1': {
        gsap.to('#bar1', { opacity: 1, duration: 0.5, ease: 'expoScale' });
      }
      case 'bar2': {
        gsap.to('#bar2', {
          transform: 'rotate(0deg)',
          duration: 0.5,
          ease: 'expoScale',
        });
      }
    }
  });
  gsap.to(dropDownMenu, {
    translateY: '-100%',
  });
}

import gsap from 'gsap';
const layers = document.querySelectorAll('.layer');

const timer = setInterval(() => {
  gsap.fromTo(
    '.layer',
    {
      opacity: 0.1,
    },
    {
      opacity: 1,
      stagger: {
        each: 0.5,
        from: 0,
      },
    }
  );
}, 1500);

function showContent() {
  setTimeout(() => {
    document.getElementById('preloader').style.display = 'none';
    document.getElementById('content').style.opacity = '1';
    clearInterval(timer);
  }, 1500);
}

function Animation() {
  console.log(layers);
}

window.addEventListener('load', showContent);

// window.addEventListener('progress', function (event) {
//   if (event.lengthComputable) {
//     var percentage = Math.round((event.loaded * 100) / event.total);
//     document.getElementById('loadingPercentage').innerText = percentage + '%';
//   }
// });

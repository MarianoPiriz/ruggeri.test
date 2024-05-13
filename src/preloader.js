import * as lottie from 'lottie-web';

// Function to hide the preloader and show the content when the page is fully loaded
function showContent() {
  setTimeout(() => {
    document.getElementById('preloader').style.display = 'none';
    document.getElementById('content').style.opacity = '1';
  }, 2000);
}
window.addEventListener('load', showContent);

window.addEventListener('progress', function (event) {
  if (event.lengthComputable) {
    var percentage = Math.round((event.loaded * 100) / event.total);

    document.getElementById('loadingPercentage').innerText = percentage + '%';
  }
});

lottie.loadAnimation({
  container: document.getElementById('lottieFile'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: './dataAnimation.json',
});

let moon = document.querySelector('.moon');
let button = document.getElementById('toggleBtn');
let isAnimating = true;

button.addEventListener('click', () => {
    if (isAnimating) {
        moon.style.animationPlayState = 'paused';
        button.textContent = 'Start Animation';
    } else {
        moon.style.animationPlayState = 'running';
        button.textContent = 'Stop Animation';
    }
    isAnimating = !isAnimating;
});

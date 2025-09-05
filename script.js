 function slowSpeed() {
            const scroll = document.querySelector('.gallery-scroll');
            scroll.style.animationDuration = '30s';
        }
        
function pauseSlide() {
            const scroll = document.querySelector('.gallery-scroll');
            scroll.style.animationPlayState = 'paused';
}
        
function resumeSlide() {
            const scroll = document.querySelector('.gallery-scroll');
            scroll.style.animationPlayState = 'running';
        }
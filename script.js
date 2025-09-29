 const navbar =document.querySelector("nav");
   let valeurlast = 0;
  window.addEventListener("scroll",()=>{
       if (window.scrollY > valeurlast){
        navbar.style.top="-100px";
       }
       else{
         navbar.style.top = 0;
       }
       valeurlast = window.scrollY;
  })
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
let videoBtn= document.querySelectorAll('.video_btn');
videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
     document.querySelector('.controls .active').classList.remove('active');
     btn.classList.add('active');
     let src = btn.getAttribute('data-src');
     document.querySelector('#video-slider').src = src;
    })
});
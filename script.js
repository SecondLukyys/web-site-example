const btn = document.getElementById('play-pause-btn');
const video = document.getElementById('bg-video');

btn.addEventListener('click', function(){
    if (!video.paused){
        video.pause();
        btn.innerHTML = '<i class="fa-solid fa-play"></i>';
    } else {
        video.play()
        btn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    }   
})

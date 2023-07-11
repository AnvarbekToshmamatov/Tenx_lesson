// <!-- Header  Asadbek start-->

//     <!-- header end -->
//     <!-- ----------------------------------------------------------------------------------- -->
//     <!-- About our app Suhrob start-->

//     <!-- About our app end -->
//     <!-- ---------------------------------------------------------------------------------- -->
//     <!-- App Feature Mohira start -->

//     <!-- App Feature end -->
//     <!-- ----------------------------------------------------------------------------------- -->
//     <!-- Checkot our app Samandar start -->

//     <!-- Checkout our app end -->
//     <!-- ----------------------------------------------------------------------------------- -->
//     <!-- How to Use and Our reative time Ali start -->
const VIDEO = document.querySelector('#video')
const playBtn = document.querySelector('#playBtn')
const videoRecorder = document.querySelector('#videoRecorder')
const muteBtn = document.querySelector("#muteBtn")
const volumeRecorder = document.querySelector('#volumeRecorder')

playBtn.addEventListener('click', function () {
    console.log(VIDEO.paused);
    if (VIDEO.paused) {
        VIDEO.play();
        playBtn.innerHTML = '&#10074; &#10074';
    } else {
        VIDEO.pause();
        playBtn.innerHTML = '&#9658';
    }
})

VIDEO.addEventListener('timeupdate', function() {
    const progress = (VIDEO.currentTime / VIDEO.duration) * 100
    videoRecorder.value = progress
})

videoRecorder.addEventListener('input', function() {
    const time = (videoRecorder.value / 100) * VIDEO.duration;
    VIDEO.currentTime = time
})

muteBtn.addEventListener('click', function() {
    if(VIDEO.muted) {
        VIDEO.muted = false;
        muteBtn.innerHTML = '&#128266';
        volumeRecorder.value = VIDEO.volume;
    }else{
        VIDEO.muted = true;
        muteBtn.innerHTML = '&#128263';
        volumeRecorder.value = 0;
    }
})

volumeRecorder.addEventListener('input', function() {

    VIDEO.volume = volumeRecorder.value;

    if (volumeRecorder.value > 0) {
        VIDEO.muted = false;
        muteBtn.innerHTML = '&#128266;';
    }else{
        VIDEO.muted = true;
        muteBtn.innerHTML = '&#128263;'
    }
})


//     <!-- How to Use and Our reative time Ali end -->
//     <!-- ------------------------------------------------------------------------------------ -->
//     <!-- Our happy Suhrob start-->

//     <!-- our happy end -->
//     <!-- ------------------------------------------------------------------------------------ -->
//     <!-- our recent blog Anvarbek start -->

//     <!-- our recent blog end -->
//     <!-- ------------------------------------------------------------------------------------- -->
//     <!-- footer Anvarbek start -->

//     <!-- footer end -->
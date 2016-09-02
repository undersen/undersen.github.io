// var vid = document.getElementById('videoIntro');
// //var vid = $('#v0')[0]; // jquery option

// // pause video on load
// vid.pause();

// // alternative & optimized implementation  thanks to http://codepen.io/daveroma/
// window.onscroll = function(){
//   vid.currentTime = window.pageYOffset/400;
// };




var videoScrollTop = $(document).scrollTop();
$(document).scroll(function() {
    var vid = document.getElementById('videoIntro');0];
    if(videoScrollTop < $(document).scrollTop()){
        vid.currentTime += 0.081;
    } else {
        vid.currentTime -= 0.081;
    }
    videoScrollTop = $(document).scrollTop();
});
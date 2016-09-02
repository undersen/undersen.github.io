var vid = document.getElementById('videoIntro');
//var vid = $('#v0')[0]; // jquery option

// pause video on load
vid.pause();

// alternative & optimized implementation  thanks to http://codepen.io/daveroma/
window.onscroll = function(){
  vid.currentTime = window.pageYOffset/400;
};

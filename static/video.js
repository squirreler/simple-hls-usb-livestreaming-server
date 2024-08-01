let videoState = "nonfunctional"; 
if (Hls.isSupported()) {
    var video = document.getElementById('video');
    var hls = new Hls();
    hls.on(Hls.Events.MEDIA_ATTACHED, function () {
    console.log('video and hls.js are now bound together !');
    });
    hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
    console.log(
        'manifest loaded, found ' + data.levels.length + ' quality level',
    );
    });
    hls.loadSource('http://127.0.0.1:5000/video-files/playlist.m3u8');
    // bind them together
    hls.attachMedia(video);
    //Below line not from the docs
    videoState = "playing"; 
    video.muted = true;
    video.autoplay = true;
}
video.addEventListener("click", () => {
    switch (videoState) {
        case "playing": 
            video.pause();
            videoState = "paused";
            break;
        case "paused":
            video.play();
            videoState = "playing";
            break;
        case "nonfunctional": 
            console.log("Video Broken");
    }
    
});
console.log("Hello Flask");
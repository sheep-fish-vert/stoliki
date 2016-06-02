function slider_3d(){
    window.onload = init;

    var casablanka;
    function init(){
        casablanka = $('#casablanka-3d').ThreeSixty({
            totalFrames: 62, // Total no. of image you have for 360 slider
            endFrame: 62, // end frame for the auto spin animation
            currentFrame: 1, // This the start frame for auto spin
            framerate:25,
            imgList: '.threesixty_images', // selector for image list
            progress: '.spinner', // selector to show the loading progress
            imagePath:'images/3d/', // path of the image assets
            filePrefix: '', // file prefix if any
            ext: '.jpg', // extention for the assets
            height: 1024,
            width: 1024,
            navigation: true,
            responsive: true
        });

    }
}


$(document).ready(function(){
    slider_3d();
});

$(window).load(function(){

});

$(window).resize(function(){

});

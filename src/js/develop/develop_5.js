


$(document).ready(function(){
    $('.casablanka-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1

                }
            }
        ]
    });
    $(".fancybox-slide").fancybox({
        openEffect	: 'none',
        closeEffect	: 'none'
    });
});

$(window).load(function(){

});

$(window).resize(function(){

});
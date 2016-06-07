function callPopup(){

    $(document).on('click','.header-backcall-wrap button', function(){
        $('.more-succ').addClass('md-show');
    });


    $(document).on('click','.md-overlay', function(){
        $('.md-show').removeClass('md-show');
    });

}

function scaleBlock(){

    var scaleParam = 1;

    function scaleCalc(){

        if(($(window).width() < (1170-$.scrollbarWidth())) && ($(window).width()) > (767-$.scrollbarWidth())){
            scaleParam = $(window).width()/1170;
        }else{
            scaleParam = 1;
        }

        $('.scale-block').css('transform','scale('+scaleParam+')');

    }

    scaleCalc();

    $(window).resize(function(){

        scaleCalc();

    });

}


$(document).ready(function(){

    callPopup();

    scaleBlock();

});

$(window).load(function(){

});

$(window).resize(function(){

});
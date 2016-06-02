
var map;

function googleMap(mapWrap) {
    function initialize() {
        var myLatlng = new google.maps.LatLng(cordX, cordY);
        var myOptions = {
            zoom: 16,
            scaleControl: false,
            scrollwheel: false,
            center: myLatlng,
            disableDefaultUI: true, //без управляющих елементов
            mapTypeId: google.maps.MapTypeId.ROADMAP, // SATELLITE - снимки со спутника,
            zoomControlOptions: {
                position: google.maps.ControlPosition.LEFT_BOTTOM // позиция слева внизу для упр елементов
            }
        }
        map = new google.maps.Map(document.getElementById(mapWrap), myOptions);

        var contentString = '<div class="marker-test">' + googleText + '</div>';
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });


        /*маркер на svg*/
        var SQUARE_PIN = 'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z'
        //больше - http://map-icons.com/
        /*/маркер на svg*/

        //var image = 'images/footer-contact-marker.png';   // иконка картинкой

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            animation: google.maps.Animation.DROP, // анимация при загрузке карты
            //icon: image //  иконка картинкой
            icon: {                               //маркер на svg
                path: SQUARE_PIN,
                fillColor: 'transparent',
                fillOpacity: 0.7,
                strokeColor: 'transparent',
                strokeWeight: 5
            },
        });

        /*анимация при клике на маркер*/
        marker.addListener('click', toggleBounce);
        function toggleBounce() {
            if (marker.getAnimation() !== null) {
                marker.setAnimation(null);
            } else {
                marker.setAnimation(google.maps.Animation.BOUNCE);
            }
        }
        /*/анимация при клике на маркер*/

        /*По клику открываеться инфоблок*/
        google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(map, marker);
        });

    }
    initialize();
}




$(document).ready(function () {

    /* map */
    googleMap('map');

    if ($(window).width() < 768) {
        map.set('draggable', false);
    }
    else {
        map.set('draggable', true);
    };

    /* map */
});

$(window).load(function () {

});

$(window).resize(function () {

    /* map */
    if ($(window).width() < 768) {
        map.set('draggable', false);
    }
    else {
        map.set('draggable', true);
    };
    /* map */

});
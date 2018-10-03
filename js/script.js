$(document).ready(function(){

    //Slider

    $('#slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        prevArrow: $('.slick-next'),
        nextArrow: $('.slick-prev'),
        variableWidth: true
    });

    //Scrolling

    var $anchors = $('a[href^="#"]').not('[href="#"]');

    $anchors.click(function (e) {
        e.preventDefault();

        var id = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top
        }, 1000);
    });

    //Isotope

    var $isotopeGrid = $('.saved-images');

    $isotopeGrid.isotope({
        itemSelector: 'img',
        percentPosition: true
    });

    //Modal
    $('.inline1').modaal({
        content_source: '#inline1'
    });

    $('.inline2').modaal({
        content_source: '#inline2'
    });

    $('.inline3').modaal({
        content_source: '#inline3'
    });

    $('.inline4').modaal({
        content_source: '#inline4'
    });

    $('.inline5').modaal({
        content_source: '#inline5'
    });

    $('.inline6').modaal({
        content_source: '#inline6'
    });

    $('.inline7').modaal({
        content_source: '#inline7'
    });

    $('.inline8').modaal({
        content_source: '#inline8'
    });

});


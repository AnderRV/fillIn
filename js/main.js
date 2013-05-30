$(document).ready(function() {
    $('#lyrics :input').livequery('focus', function(e) {
        var center = window.innerHeight / 2,
            top = $(this).offset().top ;

        if (top > center){
            $('html, body').stop().animate({
                scrollTop: (top-center)
            }, 800);
        }
    });
});
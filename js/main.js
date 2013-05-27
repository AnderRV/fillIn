$(document).ready(function() {
    var lyrics, inputs, inputCount, result, input, correct, inputCorrect, resultText;

    //result.hide();

    $('#lyrics :input').livequery('focus', function(e) {
        var center = window.innerHeight / 2,
            top = $(this).offset().top ;

        if (top > center){
            $('html, body').stop().animate({
                scrollTop: (top-center)
            }, 800);
        }
    });

    $("#send_btn").livequery('click', function(e) {
        e.preventDefault();

        lyrics = $("#lyrics");
        inputs = lyrics.find("input");
        inputCount = inputs.length;
        result = $("#result");

        correct = true;
        inputCorrect = 0;

        inputs.each(function(index, el) {
            input = $(this);
            if(input.val().toLowerCase() == input.data("result").toLowerCase()) {
                input.css({"border-color": "#468847", "color": "#468847"});
                inputCorrect += 1;
            } else {
                input.css({"border-color": "#b94a48", "color": "#b94a48"});
                correct = false;
            }
        });

        result.html(inputCorrect+"/"+inputCount).fadeIn();
        if(correct) {
            result.css({"border-color": "#468847", "color": "#468847"});
            alert("CORRECT!");
        }

        return false;
    });
});
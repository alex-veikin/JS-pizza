$(function () {

    var start = $(".title");
    start.html("Start");
    start.on("click", function(){
        $(".question").fadeIn("slow");
    });


    function rand(max, min) {
        return Math.round(Math.random() * (max - min) + min);
    }

    var cardsCount = 6;
    var cardsArr = [];

    for(var i = 0; i < cardsCount + 2; i++){
        do {
            var card = String(rand(1, 4) + "-" + rand(1, 9) + ".png");
        } while (cardsArr.indexOf(card) !== -1);

        console.log(!(~cardsArr.indexOf(card)));
        cardsArr[i] = card;
    }

    for(var j = 0; j < cardsArr.length - 2; j++) {
        $(".cards").append("<div><img src='img/" +
            cardsArr[j] +
         "' alt=''></div>");
    }

    cardsArr.sort(function () {
        return Math.random() > 0.5;
    });

    for(var k = 0; k < cardsArr.length; k++) {
        $(".variants").append("<div><img src='img/" +
            cardsArr[k] +
         "' alt=''></div>");
    }

    $(".variants div img").on("click", function () {
        $(this).addClass("check");
    });

    $(".cards img").addClass("flipIn");

});
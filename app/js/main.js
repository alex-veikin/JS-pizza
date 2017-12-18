$(function () {

    //Выравнивание высоты блоков item->title
    var  title = $(".item .title");

    function resizeHeight() {
        var height = 0;
        title.removeAttr("style");

        title.each(function () {
            if ($(this).height() > height) height = $(this).height();
        });

        title.height(height);
    }

    resizeHeight();

    $(window).resize(resizeHeight);




    //Выбор ингредиентов и подсчет цены
    var products = $(".item li");
    var base = $(".item li.base");
    var sauce = $(".item li.sauce");

    function calc() {
        var price = 0;

        products.each(function () {
            if($(this).hasClass("active")) {
                price += parseFloat($(this).attr("data-price"));
            }
        });

        $(".price").html((price) ? price + " руб." : "");
    }

    products.click(function () {
        if ($(this).hasClass("base")) { //Основа - только одна
            base.not($(this)).removeClass("active");
        }

        if ($(this).hasClass("sauce")) { //Соус - только один
            sauce.not($(this)).removeClass("active");
        }

        $(this).toggleClass("active");
        calc();
    });



});
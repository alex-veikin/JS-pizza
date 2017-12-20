$(function () {

    var item = $(".item"); //Блоки продуктов
    var title = $(".item .title"); //Заголовки блоков продуктов
    var products = $(".item li"); //Все продукты
    var base = $(".item li.base"); //Основы
    var sauce = $(".item li.sauce"); //Соусы
    var order = $(".order"); //Кнопка заказа
    var price = $(".price"); //Цена


    function resizeHeight() { //Выравнивание высоты блоков item->title
        var height = 0;
        title.removeAttr("style");

        title.each(function () {
            if ($(this).height() > height) height = $(this).height();
        });

        title.height(height);
    }


    function calc() { //Подсчет цены
        var res = 0;

        products.each(function () {
            if($(this).hasClass("active")) {
                res += parseFloat($(this).attr("data-price"));
            }
        });

        if (res) {
            price.fadeIn().html("Цена " + res + " руб.");
        } else {
            price.fadeOut();
        }
    }


    function description() { //Вывод состава продуктов
        var str = "<p>Состав:</p>";
        var show = false;

        item.each(function () {
            if($(this).find(".active").length) {
                str += "<p><span>" + $(this).find(".title").html() + ": </span>";

                $(this).find(".active").each(function(){
                    str +=  $(this).html() + ", ";
                });

                str = str.slice(0, -2);
                str += "</p>";

                show = true;
            }
        });

        if (!show) str = "<p>Выберите продукты для пиццы</p>";

        $(".description").html(str);
    }


    function parts() {
        var count = 0;

        item.each(function () {
            if($(this).find(".active").length) count++;
        });

        $(".pizza div:lt(" + count + ")").addClass("animate");

        if (count) {
            $(".pizza div:gt(" + (count - 1) + ")").removeClass("animate");
        } else {
            $(".pizza div").removeClass("animate");
        }

        (count === 4) ? order.addClass("show") : order.removeClass("show");
    }




    resizeHeight();

    $(window).resize(resizeHeight);

    products.click(function () { //Выбор ингредиентов и подсчет цены
        if ($(this).hasClass("base")) { //Основа - только одна
            base.not($(this)).removeClass("active");
        }

        if ($(this).hasClass("sauce")) { //Соус - только один
            sauce.not($(this)).removeClass("active");
        }

        $(this).toggleClass("active");
        calc();
        description();
        parts();
    });



});
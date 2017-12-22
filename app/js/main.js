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
            if ($(this).height() > height) height = $(this).height(); //Самый высокий
        });

        title.height(height);
    }


    function calc() { //Подсчет цены
        var res = 0;

        products.each(function () {
            if($(this).hasClass("active")) {
                res += parseFloat($(this).attr("data-price")); //Суммируем data-price
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
                str += "<p><span>" + $(this).find(".title").html() + ": </span>"; //Формируем строку

                $(this).find(".active").each(function(){
                    str +=  $(this).find("p").html() + ", "; //Выводим выбранные элементы
                });

                str = str.slice(0, -2); //Обрезаем последнюю запятую
                str += "</p>";

                show = true;
            }
        });

        if (!show) str = "<p>Выберите продукты для пиццы</p>"; //Если не выбрано ни одного продукта

        $(".description").html(str);
    }


    function parts() { //Части пиццы
        var count = 0;

        item.each(function () {
            if($(this).find(".active").length) count++; //Кол-во частей
        });

        $(".pizza div:lt(" + count + ")").addClass("animate"); //Анимируем части

        if (count) { //Убираем анимацию
            $(".pizza div:gt(" + (count - 1) + ")").removeClass("animate");
        } else {
            $(".pizza div").removeClass("animate");
        }

        (count === 4) ? order.addClass("show") : order.removeClass("show"); //Отодражать кнопку
    }



    resizeHeight();
    $(window).resize(resizeHeight);


    products.click(function (e) { //Выбор ингредиентов и подсчет цены
        if ($(this).hasClass("base")) { //Основа - только одна
            base.not($(this)).removeClass("active").find("i").remove();
        }

        if ($(this).hasClass("sauce")) { //Соус - только один
            sauce.not($(this)).removeClass("active").find("i").remove();
        }

        if (e.target.tagName === "I") { //Второй вариант
            $(this).removeClass("active").find("i").remove();
        } else {
            if (!$(this).find("i").length) {
                $(this).addClass("active")
                    .append("<i class=\"fa fa-times\" aria-hidden=\"true\"></i>");
            }
        }

        calc();
        description();
        parts();
    });

});
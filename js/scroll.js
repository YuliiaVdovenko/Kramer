// плавный скролл с дабавление data-target на все необходимые ссылки-якоря
$(document).ready(function(){
    //указываем что все ссылки которые имеют data-target который начинается с anchor
    $('a[data-target^="anchor"]').on('click', function () {
        var target = $(this).attr('href'),
            // узнаем расстояние относительно верха
            bl_top = $(target).offset().top;
        // указываем анимацию на расстояние которое вычесленно выше
        $('body,html').animate({scrollTop: bl_top}, 1500);
        return false;
    })
});


// Подсветка кнопок при прокрутке
jQuery(window).scroll(function(){
    var $sections = $('section');
    $sections.each(function(i,el){
        var top  = $(el).offset().top-100;
        var bottom = top +$(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
        if( scroll > top && scroll < bottom){
            $('a.active-section-link').removeClass('active-section-link');
            $('a[href="#'+id+'"]').addClass('active-section-link');

        }
    })
});



//
// not work
// jQuery(function($) {
//
//     var $nav = $('.navbar');
//     var $win = $(window);
//     var winH = $win.height();
//
//     $win.on("scroll", function () {
//         if ($(this).scrollTop() > winH ) {
//             $nav.addClass("scrolled-header");
//         } else {
//             $nav.removeClass("scrolled-header");
//         }
//     }).on("resize", function(){
//         winH = $(this).height();
//     });
//
// });


// закрытие гамбургера после перехода к а
//при нажатии на ссылку
$(".navbar-collapse a").click(function() {
    //если она не имеет класс dropdown-toggle
    if (!$(this).hasClass("dropdown-toggle")) {
        //то закрыть меню
        $(".navbar-collapse").collapse('hide');
    }
});





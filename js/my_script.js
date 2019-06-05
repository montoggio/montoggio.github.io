// $('.menu-icon').click(function () {
// });
$('.menu-icon').click(function () {
  $(this).toggleClass('clicked');
  $('.nav__wrapper__link').toggleClass('activ');
});

// slick slider
$('.slider__slick').slick({
  prevArrow: $('.prevArrow'),
  nextArrow: $('.nextArrow'),
  dots : true,
  responsive : [
    {
      breakpoint: 991,
      settings : {
        dots : true
      }
    }
  ]
});
// slick lider end

// 



// 

// script dootstrap 4 modal wind

  $(function () {
    var link = $('a[data-toggle="modal"]');
    link.on('click', function (event) {
      var work = $(this).attr('data-work');
      var modal = $('.modal');
      modal.find('.modal-body').load(work + '.html')
    });
  }); 

// script dootstrap 4 modal wind end

// plavni scrol

$(".nav__wrapper__link").on("click", "a", function (event) {
  event.preventDefault(); //опустошим стандартную обработку
  var id = $(this).attr('href'), //заберем айдишник блока с параметром URL
    top = $(id).offset().top; //определим высоту от начала страницы до якоря
  $('body,html').animate({
    scrollTop: top -80 + 'px'
  }, 1000); //сделаем прокрутку за 1 с
});

// plavni scrol end


$(function() { 

let scrollObject = $(".stats-text").offset().top - 700
let flag = false
$(window).on('scroll', function(){
    let scrollTop = $(window).scrollTop()
    if(scrollTop>scrollObject && flag==false){
        $('.counting').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
        flag = true
    }
});

var iphone= $('#iphone');

var layer= $('.baner-top');

layer.mousemove(function(e){
  var ivalueX= (e.pageX * -1 / 30);
  var ivalueY= (e.pageY * -1 / 30);
  var cvalueX= (e.pageX * -1 / 40);
  var cvalueY= (e.pageY * -1 / 60);
  console.log('ok');
  iphone.css('transform', 'translate3d('+ivalueX+'px,'+ivalueY+'px, 0)');
});

var prev = 0;
var $window = $(window);
var nav = $('#headr');

$window.on('scroll', function(){
  var scrollTop = $window.scrollTop();
  nav.toggleClass('hidden', scrollTop > prev);
  prev = scrollTop;
});

var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
  );
  wow.init();      
                                      
    $(".faq-title").on('click',function() {  
      $(this).next('.faq-des').stop().slideToggle();
      $(this).children('.rotat').toggleClass('active');

    });

    $(".menu").on('click',function() {  
      $('.header-page').toggleClass('active');
    });

    var typed = new Typed('.titi', {
        
      strings: ['، لندینگ پیجی برای جذب افراد جدید'],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
    });

        $(window).on( "scroll", function() {
      if( $(window).scrollTop() > 800 )  {
          $('.top').addClass('jump');
      } else {
          $('.top').removeClass('jump');
      }
  } );

  if ($(window).width() < 991) {
    $(".header-page li").has('ul').children('a').removeAttr("href");
    $('.header-page li a').on('click', function() {
         if ( $(this).parent('li').children('ul').length > 0 ) {
             $(this).parent('li').children('ul').stop().slideToggle();
             }  
     });
     $('.header-page li a[href^="#"]').on('click', function() {
        $('.app, .header-page, .menu').removeClass('active');   
     });
}

window.addEventListener("load",function(){
  document.querySelector(".loding-page").classList.add("loded")   
 });

  });
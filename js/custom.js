$(function(){
	'use strict'

	//Sticky Menu js
  $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
     
     if(scrolling > 100){
         back2top.fadeIn(500);
     }
     else{
         back2top.fadeOut(500);
     }
 });

	// Closes responsive menu when a scroll link is clicked
  $('.nav-link').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });

	//Back to top js
  var back2top = $(".back-to-top");
  var html_body = $('html,body');
  back2top.click(function(){
    html_body.animate({scrollTop:0},1000);
  });

  // Venobox
  $('.venobox').venobox();
	
	
	//Smooth Scroll js
  var html_body = $('html, body');
  $('a').on('click', function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
              html_body.animate({
                  scrollTop: target.offset().top - 0
              }, 1500);
              return false;
          }
      }
  });


  //Progress Bar
  $(".circle_percent").each(function() {
    var $this = $(this),
		$dataV = $this.data("percent"),
		$dataDeg = $dataV * 3.6,
		$round = $this.find(".round_per");
	$round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");	
	$this.append('<div class="circle_inbox"><span class="percent_text"></span></div>');
	$this.prop('Counter', 0).animate({Counter: $dataV},
	{
		duration: 2000, 
		easing: 'swing', 
		step: function (now) {
            $this.find(".percent_text").text(Math.ceil(now)+"%");
        }
    });
	if($dataV >= 51){
		$round.css("transform", "rotate(" + 360 + "deg)");
		setTimeout(function(){
			$this.addClass("percent_more");
		},1000);
		setTimeout(function(){
			$round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
		},1000);
	} 
});

	//Mixit Up filter
	var containerEl = document.querySelector('.project-main');
	var mixer = mixitup(containerEl);    

	//Client Slider
	$('.client-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    infinite: false,
    speed:1000,
    autoplaySpeed: 2500,
    dots: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        }
      }
      ]
  });


});
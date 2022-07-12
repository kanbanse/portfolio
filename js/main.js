$(function(){ 
  var laptopsInner = document.querySelectorAll('.wrapper .laptop-inner');

  for (const laptopInner of laptopsInner) {
    laptopInner.addEventListener('mouseover', (e) => {
      var imageHeight = e.target.offsetHeight;
      var laptopHeight = e.currentTarget.offsetHeight;
      var scrollHeight = imageHeight-laptopHeight;
      console.log(`${imageHeight} | ${laptopHeight} | ${scrollHeight}`);  
      e.target.style.transform = "translate3d(0, -"+scrollHeight+"px, 0)";
    });
    laptopInner.addEventListener('mouseout', (e) => {
      e.target.style.transform = "translate3d(0, 0, 0)";
    });
  }

  var laptopsInner1 = document.querySelectorAll('.wrapper .laptop-inner3');

  for (const laptopInner of laptopsInner1) {
    laptopInner.addEventListener('mouseover', (e) => {
      var imageHeight = e.target.offsetHeight;
      var laptopHeight = e.currentTarget.offsetHeight;
      var scrollHeight = imageHeight-laptopHeight;
      console.log(`${imageHeight} | ${laptopHeight} | ${scrollHeight}`);  
      e.target.style.transform = "translate3d(0, -"+scrollHeight+"px, 0)";
    });
    laptopInner.addEventListener('mouseout', (e) => {
      e.target.style.transform = "translate3d(0, 0, 0)";
    });
  };
  
  $('.sec2 .s2_tab ul li').click(function(e){
    e.preventDefault();
    $('li').removeClass('active');
    $(this).addClass('active');
    num=$(this).index();
    // each li 개수만큼 반복하라
    $('.s2_pic >div').each(function(){
        if(num==$(this).index()){
            $('.s2_pic > div').hide();
            $(this).fadeIn(500);
        }
    });
});


var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

// popup(팝업)
var img_num=0;
var img_total=$('.swiper-slide').length;
$('.popup').hide();
$('.swiper-slide').click(function(e){
    e.preventDefault();
    //클릭한 이미지의 인덱스 번호를 img_num에 저장
    //인덱스번호는 0부터 시작하고, 이미지의 번호는 1부터 시작하므로 공식에 1을 더해주어야 한다.
    img_num=$(this).index()+1;
    //클릭한 이미지의 a태그의 href속성을 img_attr변수에 저장
    var img_attr=$(this).find('a').attr('href');
    var img_addr='<img src="'+img_attr+'">';
    $('header').hide();
    $('.graphic').empty();
    $('.graphic').append(img_addr);
    // $('#dlas').css('left','5');
    $('.popup').show();
    $('button').css('left','5%').css('top','10%');
});
//팝업창의 닫기버튼
$('.popup .close').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.popup').hide();
    $('header').show();
    $('button').css('left','initial').css('top','30%').css('right','5%');
});
//팝업창의 오른쪽버튼
$('.popup .nextBtn').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    img_num++; 
    if(img_num>img_total){
        img_num=1;
    }       
    var img_addr='<img src="img/big'+img_num+'.jpg">'
    $('.graphic').empty();
    $('.graphic').append(img_addr);
    $('.popup').show();        
});
//팝업창의 왼쪽 버튼
$('.popup .prevBtn').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    img_num--;
    if(img_num<=0){
        img_num=img_total;
    }   
    var img_addr='<img src="img/big'+img_num+'.jpg">'
    $('.graphic').empty();
    $('.graphic').append(img_addr);
    $('.popup').show();
});

// GNB
$('nav ul li a').click(function(e){
  e.preventDefault();
  var $anchor=$(this);
  $('html,body').stop().animate({
    scrollTop:$($anchor.attr('href')).offset().top
  },1000)
})
  


(function() {

  var $$ = function(selector, context) {
    var context = context || document;
    var elements = context.querySelectorAll(selector);
    return [].slice.call(elements);
  };

  function _fncSliderInit($slider, options) {
    var prefix = ".fnc-";

    var $slider = $slider;
    var $slidesCont = $slider.querySelector(prefix + "slider__slides");
    var $slides = $$(prefix + "slide", $slider);
    var $controls = $$(prefix + "nav__control", $slider);
    var $controlsBgs = $$(prefix + "nav__bg", $slider);
    var $progressAS = $$(prefix + "nav__control-progress", $slider);

    var numOfSlides = $slides.length;
    var curSlide = 1;
    var sliding = false;
    var slidingAT = +parseFloat(getComputedStyle($slidesCont)["transition-duration"]) * 1000;
    var slidingDelay = +parseFloat(getComputedStyle($slidesCont)["transition-delay"]) * 1000;

    var autoSlidingActive = false;
    var autoSlidingTO;
    var autoSlidingDelay = 5000; // default autosliding delay value
    var autoSlidingBlocked = false;

    var $activeSlide;
    var $activeControlsBg;
    var $prevControl;

    function setIDs() {
      $slides.forEach(function($slide, index) {
        $slide.classList.add("fnc-slide-" + (index + 1));
      });

      $controls.forEach(function($control, index) {
        $control.setAttribute("data-slide", index + 1);
        $control.classList.add("fnc-nav__control-" + (index + 1));
      });

      $controlsBgs.forEach(function($bg, index) {
        $bg.classList.add("fnc-nav__bg-" + (index + 1));
      });
    };

    setIDs();

    function afterSlidingHandler() {
      $slider.querySelector(".m--previous-slide").classList.remove("m--active-slide", "m--previous-slide");
      $slider.querySelector(".m--previous-nav-bg").classList.remove("m--active-nav-bg", "m--previous-nav-bg");

      $activeSlide.classList.remove("m--before-sliding");
      $activeControlsBg.classList.remove("m--nav-bg-before");
      $prevControl.classList.remove("m--prev-control");
      $prevControl.classList.add("m--reset-progress");
      var triggerLayout = $prevControl.offsetTop;
      $prevControl.classList.remove("m--reset-progress");

      sliding = false;
      var layoutTrigger = $slider.offsetTop;

      if (autoSlidingActive && !autoSlidingBlocked) {
        setAutoslidingTO();
      }
    };

    function performSliding(slideID) {
      if (sliding) return;
      sliding = true;
      window.clearTimeout(autoSlidingTO);
      curSlide = slideID;

      $prevControl = $slider.querySelector(".m--active-control");
      $prevControl.classList.remove("m--active-control");
      $prevControl.classList.add("m--prev-control");
      $slider.querySelector(prefix + "nav__control-" + slideID).classList.add("m--active-control");

      $activeSlide = $slider.querySelector(prefix + "slide-" + slideID);
      $activeControlsBg = $slider.querySelector(prefix + "nav__bg-" + slideID);

      $slider.querySelector(".m--active-slide").classList.add("m--previous-slide");
      $slider.querySelector(".m--active-nav-bg").classList.add("m--previous-nav-bg");

      $activeSlide.classList.add("m--before-sliding");
      $activeControlsBg.classList.add("m--nav-bg-before");

      var layoutTrigger = $activeSlide.offsetTop;

      $activeSlide.classList.add("m--active-slide");
      $activeControlsBg.classList.add("m--active-nav-bg");

      setTimeout(afterSlidingHandler, slidingAT + slidingDelay);
    };



    function controlClickHandler() {
      if (sliding) return;
      if (this.classList.contains("m--active-control")) return;
      if (options.blockASafterClick) {
        autoSlidingBlocked = true;
        $slider.classList.add("m--autosliding-blocked");
      }

      var slideID = +this.getAttribute("data-slide");

      performSliding(slideID);
    };

    $controls.forEach(function($control) {
      $control.addEventListener("click", controlClickHandler);
    });

    function setAutoslidingTO() {
      window.clearTimeout(autoSlidingTO);
      var delay = +options.autoSlidingDelay || autoSlidingDelay;
      curSlide++;
      if (curSlide > numOfSlides) curSlide = 1;

      autoSlidingTO = setTimeout(function() {
        performSliding(curSlide);
      }, delay);
    };

    if (options.autoSliding || +options.autoSlidingDelay > 0) {
      if (options.autoSliding === false) return;
      
      autoSlidingActive = true;
      setAutoslidingTO();
      
      $slider.classList.add("m--with-autosliding");
      var triggerLayout = $slider.offsetTop;
      
      var delay = +options.autoSlidingDelay || autoSlidingDelay;
      delay += slidingDelay + slidingAT;
      
      $progressAS.forEach(function($progress) {
        $progress.style.transition = "transform " + (delay / 1000) + "s";
      });
    }
    
    $slider.querySelector(".fnc-nav__control:first-child").classList.add("m--active-control");

  };

  var fncSlider = function(sliderSelector, options) {
    var $sliders = $$(sliderSelector);

    $sliders.forEach(function($slider) {
      _fncSliderInit($slider, options);
    });
  };

  window.fncSlider = fncSlider;
}());

/* not part of the slider scripts */

/* Slider initialization
options:
autoSliding - boolean
autoSlidingDelay - delay in ms. If audoSliding is on and no value provided, default value is 5000
blockASafterClick - boolean. If user clicked any sliding control, autosliding won't start again
*/
fncSlider(".example-slider", {autoSlidingDelay: 4000});

var $demoCont = document.querySelector(".demo-cont");

[].slice.call(document.querySelectorAll(".fnc-slide__action-btn")).forEach(function($btn) {
  $btn.addEventListener("click", function() {
    $demoCont.classList.toggle("credits-active");
  });
});

document.querySelector(".demo-cont__credits-close").addEventListener("click", function() {
  $demoCont.classList.remove("credits-active");
});

document.querySelector(".js-activate-global-blending").addEventListener("click", function() {
  document.querySelector(".example-slider").classList.toggle("m--global-blending-active");
});
});

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
});
//팝업창의 닫기버튼
$('.popup .close').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.popup').hide();
    $('header').show();
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
  
});

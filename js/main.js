$(function(){ 
  
  var win_width=$(window).width();
  if (win_width>1367){
        var sw=0
      $('#nav-icon1').click(function(){
        if(sw==0){
            sw=1;
    $(this).toggleClass('open');
        $('.mb_GNB').stop().animate({
            right:0,
            // overflowY:hidden
        });
        $('html,body').css('overflow-y','hidden');
        }else{
            sw=0;
            $(this).removeClass('open');
            $('.mb_GNB').stop().animate({
                right:'-100%'
            });
        }
    });
    $('.gnb nav >ul >li >a').click(function(){
        if($(this).attr('class') !='active'){
            $('.mb_GNB nav > ul > li> a').removeClass('active');
            $(this).addClass('active');
            $('.mb_GNB nav ul li ul').slideUp();
            $(this).next().slideDown();
        }else{
            $(this).removeClass('active');
            $(this).next().slideUp();
            
        }
    });
     

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
      // each li ???????????? ????????????
      $('.s2_pic >div').each(function(){
          if(num==$(this).index()){
              $('.s2_pic > div').hide();
              $(this).fadeIn(500);
          }
      });
  });


  var swiper = new Swiper(".swiper", {
    centeredSlides:true,
    effect: "coverflow",
    breakpoints:{
      1280:{
        slidesPerView:4,
        spaceBetween:10,
        centeredSlides:true
      },
     
    },
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 70,
      modifier:1.2,
      slideShadows:false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });


  // popup(??????)
  var img_num=0;
  var img_total=$('.swiper-slide').length;
  $('.popup').hide();
  $('.swiper-slide').click(function(e){
      e.preventDefault();
      //????????? ???????????? ????????? ????????? img_num??? ??????
      //?????????????????? 0?????? ????????????, ???????????? ????????? 1?????? ??????????????? ????????? 1??? ??????????????? ??????.
      img_num=$(this).index()+1;
      //????????? ???????????? a????????? href????????? img_attr????????? ??????
      var img_attr=$(this).find('a').attr('href');
      var img_addr='<img src="'+img_attr+'">';
      //????????? swiper-slide??? data???????????? txt_addr????????? ??????
      var txt_addr=$(this).attr('data');
      console.log(txt_addr);
      //txt_addr??? ?????? ??????(,)??? ???????????? ????????? ????????? ??????, ????????? ???????????? 5??????(0,1,2,3,4)
      //str[0]=1
      //str[1]=?????????(BOOK COVER)
      //str[2]=Company of One
      //str[3]=????????? & ?????????????????????
      //str[4]=???????????? ????????? ????????? ??????
      // var str=txt_addr.split(',',5); 
      // var txt_str='<div class="slide_des"><div class="slide_title"><i>'+str[0]+'</i>'+str[1]+'</div><div class="slide_sub_title">??????</div><div class="slide_content">'+str[2]+'</div><div class="slide_sub_title">??????</div><div class="slide_content">'+str[3]+'</div><div class="slide_sub_title">??????</div><div class="slide_content">'+str[4]+'</div></div>';
      $('header').hide();
      // $('.graphic').empty();
      // $('.graphic').append(img_addr);
      // $('#dlas').css('left','5');
      // $('.popup').show();
      $('#dlas').css('left','5%').css('top','10%');
      $('.graphic').empty();
      // $('.txt').empty();
      $('.graphic').append(img_addr);
      // $('.txt').append(txt_str);
      $('.popup').show();
      $('html,body').css('overflow-y','hidden');

  });
  //???????????? ????????????
  $('.popup .close').click(function(e){
      e.preventDefault();
      e.stopPropagation();
      $('.popup').hide();
      $('header').show();
      $('#dlas').css('left','initial').css('top','30%').css('right','5%');
      $('html,body').css('overflow-y','visible');
  });
  //???????????? ???????????????
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
  //???????????? ?????? ??????
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
    
  // ?????????
  // Hy! You can really help me if you donate me leastways 1 dollor :)
  // -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-



  var mouse = {
    X   : 0,
    Y   : 0,
    CX  : 0,
    CY  : 0
  },
  block = {
    X   : mouse.X,
    Y   : mouse.Y,
    CX  : mouse.CX,
    CY  : mouse.CY
  },
  imags = [
    'img/pf1.jpg',
    'img/pf2.jpg',
    'img/pf3.jpg',
    'img/pf4.jpg',  
  ];

  $('.block').on('mousemove', function(e) {
  mouse.X   = (e.pageX - $(this).offset().left) - $('.block').width() / 2;
  mouse.Y   = (e.pageY - $(this).offset().top) - $('.block').height() / 2;
  })

  $('.block').on('mouseleave', function(e) {
  mouse.X   = mouse.CX;
  mouse.Y   = mouse.CY;
  })

  setInterval(function(){

  block.CY   += (mouse.Y - block.CY) / 12;
  block.CX   += (mouse.X - block.CX) / 12;

  $('.block .circleLight').css('background', 'radial-gradient(circle at ' + mouse.X + 'px ' + mouse.Y + 'px, #fff, transparent)')
  $('.block').css({
  transform : 'scale(1.03) translate(' + (block.CX * 0.05) + 'px, ' + (block.CY * 0.05) + 'px) rotateX(' + (block.CY * 0.05) + 'deg) rotateY(' + (block.CX * 0.05) + 'deg)'
  })

  }, 20);

  $('.banseok .item').each(function(i){

  if(i == 0){

  $(this).addClass('active');
  $(this).next().addClass('next');
  $(this).prev().addClass('prev');
  }

  $(this).attr('id', 'banseok-'+i);

  $(this).prepend(
  $('<div>', {class: 'blur', style: 'background-image: url(' + imags[i] + ');'}),
  $('<div>', {class: 'bg', style: 'background-image: url(' + imags[i] + ');'})
  )

  $(this).find('.block').css('background-image', 'url(' + imags[i] + ')')

  $('.navigations .dots').append(
  $('<li>', {class: i == 0 ? 'active' : '', id: i}).on('click', function(){
  var cSlide = $('.banseok #banseok-'+$(this).attr('id'));
    
    $('.navigations .dots li').removeClass('active');
    $(this).addClass('active');
    
    $('.banseok .item').removeClass('active prev next');
    cSlide.addClass('active');
    cSlide.next().addClass('next');
    cSlide.prev().addClass('prev');
  })
  )
  });
}else{

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
    // each li ???????????? ????????????
    $('.s2_pic >div').each(function(){
        if(num==$(this).index()){
            $('.s2_pic > div').hide();
            $(this).fadeIn(500);
        }
    });
});


var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  breakpoints:{
  

    360:{
      slidesPerView: 2,
      coverflowEffect: {
        rotate: 50,
        // stretch: 700,
        depth: 2000,
        modifier: 100,
        slideShadows: true,
      },
    },
    768:{
      slidesPerView:3,
      // spaceBetween:20,
      centeredSlides:true,
      coverflowEffect: {
        rotate: 50,
        stretch: 00,
        depth: 2,
        modifier: 1,
        slideShadows: false,
      },

    },
    1024:{
      slidesPerView:3,
      spaceBetween:20,
      centeredSlides:false

    },
    1200:{

    },

  },
  grabCursor: true,
  centeredSlides: true,
  loop:true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 00,
    depth: 2,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

// popup(??????)
var img_num=0;
var img_total=$('.swiper-slide').length;
$('.popup').hide();
$('.swiper-slide').click(function(e){
    e.preventDefault();
    //????????? ???????????? ????????? ????????? img_num??? ??????
    //?????????????????? 0?????? ????????????, ???????????? ????????? 1?????? ??????????????? ????????? 1??? ??????????????? ??????.
    img_num=$(this).index()+1;
    //????????? ???????????? a????????? href????????? img_attr????????? ??????
    var img_attr=$(this).find('a').attr('href');
    var img_addr='<img src="'+img_attr+'">';
    $('header').hide();
    $('.graphic').empty();
    $('.graphic').append(img_addr);
    // $('#dlas').css('left','5');
    $('.popup').show();
    $('#dlas').css('left','5%').css('top','10%');
});
//???????????? ????????????
$('.popup .close').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.popup').hide();
    $('header').show();
    $('#dlas').css('left','initial').css('top','30%').css('left','5%');
});
//???????????? ???????????????
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
//???????????? ?????? ??????
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

// ?????????
$('.mb_GNB').css({
  right:'-100%'
})
var sw=0
	$('#nav-icon1').click(function(){
    if(sw==0){
        sw=1;
$(this).toggleClass('open');
    $('.mb_GNB').stop().animate({
        right:0
    });
    $('html,body').css('overflow-y','hidden');
    }else{
        sw=0;
        $(this).removeClass('open');
        $('.mb_GNB').stop().animate({
            right:'-100%'
        });
        $('html,body').css('overflow-y','visible');
    }
});
$('.mb_GNB nav >ul >li >a').click(function(){
    if($(this).attr('class') !='active'){
        $('.mb_GNB nav > ul > li> a').removeClass('active');
        $(this).addClass('active');
        $('.mb_GNB nav ul li ul').slideUp();
        $(this).next().slideDown();
    }else{
        $(this).removeClass('active');
        $(this).next().slideUp();
    }
});
$('.mb_GNB nav > ul >li >a').click(function(){
  $('.mb_GNB').stop().animate({
    right:'-100%',
  })
  $('html,body').css('overflow-y','visible');
  $('#nav-icon1').removeClass('open');
  sw=0
})
  
// ?????????
// Hy! You can really help me if you donate me leastways 1 dollor :)
// -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-



var mouse = {
  X   : 0,
  Y   : 0,
  CX  : 0,
  CY  : 0
},
block = {
  X   : mouse.X,
  Y   : mouse.Y,
  CX  : mouse.CX,
  CY  : mouse.CY
},
imags = [
  '../img/pf1.jpg',
  '../img/pf2.jpg',
  '../img/pf3.jpg',
  '../img/pf4.jpg',  
];

$('.block').on('mousemove', function(e) {
mouse.X   = (e.pageX - $(this).offset().left) - $('.block').width() / 2;
mouse.Y   = (e.pageY - $(this).offset().top) - $('.block').height() / 2;
})

$('.block').on('mouseleave', function(e) {
mouse.X   = mouse.CX;
mouse.Y   = mouse.CY;
})

setInterval(function(){

block.CY   += (mouse.Y - block.CY) / 12;
block.CX   += (mouse.X - block.CX) / 12;

$('.block .circleLight').css('background', 'radial-gradient(circle at ' + mouse.X + 'px ' + mouse.Y + 'px, #fff, transparent)')
$('.block').css({
transform : 'scale(1.03) translate(' + (block.CX * 0.05) + 'px, ' + (block.CY * 0.05) + 'px) rotateX(' + (block.CY * 0.05) + 'deg) rotateY(' + (block.CX * 0.05) + 'deg)'
})

}, 20);

$('.banseok .item').each(function(i){

if(i == 0){

$(this).addClass('active');
$(this).next().addClass('next');
$(this).prev().addClass('prev');
}

$(this).attr('id', 'banseok-'+i);

$(this).prepend(
$('<div>', {class: 'blur', style: 'background-image: url(' + imags[i] + ');'}),
$('<div>', {class: 'bg', style: 'background-image: url(' + imags[i] + ');'})
)

$(this).find('.block').css('background-image', 'url(' + imags[i] + ')')

$('.navigations .dots').append(
$('<li>', {class: i == 0 ? 'active' : '', id: i}).on('click', function(){
var cSlide = $('.banseok #banseok-'+$(this).attr('id'));
  
  $('.navigations .dots li').removeClass('active');
  $(this).addClass('active');
  
  $('.banseok .item').removeClass('active prev next');
  cSlide.addClass('active');
  cSlide.next().addClass('next');
  cSlide.prev().addClass('prev');
})
)
})

}


});

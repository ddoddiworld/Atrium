$(document).ready(function(){

  //header fixed 주메뉴 고정

var lastScroll = 0;
  $(window).scroll(function(e){

    var winScroll = $(window).scrollTop();

    if (winScroll >= 50) {
    //header 글자색 변경
    $(".gnb > li > a,.sns > li > a,.total a").css({"color":"var(--menu-color)"});
      //header 의 배경색 css 변경
      $("header").css({"background-color":"#fff"});
      //로고 이미지 경로 바꾸기
      $(".logo img").attr("src", "images/f7e5a0d5acf91.png");

    }else{
      $(".gnb > li > a,.sns > li > a").css({"color":"#fff"});
      $("header").css({"background":"none"});
      $(".logo img").attr("src", "images/4382b846517cf.png");
    }    


    if (winScroll >= 550) {
      //header 밑줄 생기기
      $("header").css({"border-bottom":"1px solid #ccc"});
      }else{
        $("header").css({"border":"0"});
      }    
  });

  //메인슬라이드

$('.main_visual').slick({
 dots: true,   //1,2 버튼
  infinite: true,
  speed: 500,
  fade: true, 
  cssEase: 'linear',
  arrows:false,//양쪽 prev,next 버튼
  autoplay:true //자동실행
});

//화면창 991보다 작을때
var windowWidth = $(window).width();//창의크기 알아오기
if(windowWidth < 991){ //창의크기가 991보다 작으면
  //header
 
  $(window).scroll(function(e){

    var winScroll = $(window).scrollTop();

    if (winScroll >= 50) {
    //header 글자색 변경
    $("header").css({"background-color":"var(--title-color)"});
    $(".logo img").attr("src", "images/4382b846517cf.png");
    $(".gnb > li > a,.sns > li > a,.total a").css({"color":"#fff"});

    }else{
      
      $("header").css({"background":"none"});
      $(".logo img").attr("src", "images/4382b846517cf.png");
      $("header").css({"background":"none"});
      $(".logo img").attr("src", "images/4382b846517cf.png");
    }    
  });


//관련회사 슬라이드
  $('.family_com_tb').slick({
//해야할일
arrows:false,
autoplay: true,
  autoplaySpeed: 5000,
  });


}


 

});//ready

$( window ).resize(function() {

	var width=window.innerWidth;

	if (width < 991){
    $(window).scroll(function(e){

      var winScroll = $(window).scrollTop();
  
      if (winScroll >= 50) {
      //header 글자색 변경
      $("header").css({"background-color":"var(--title-color)"});
      $(".logo img").attr("src", "images/4382b846517cf.png");
      $(".gnb > li > a,.sns > li > a,.total a").css({"color":"#fff"});
  
      }else{
        
        $("header").css({"background":"none"});
        $(".logo img").attr("src", "images/4382b846517cf.png");
        $("header").css({"background":"none"});
        $(".logo img").attr("src", "images/4382b846517cf.png");
      }    
    });//scroll
   
    $('.family_com_tb').slick({
      arrows: false,
      autoplay: true,
  autoplaySpeed: 2000,
    });//slick
	

	}else{
    //화면 커졌을때
    $(window).scroll(function(e){

      var winScroll = $(window).scrollTop();
  
      if (winScroll >= 50) {
      //header 글자색 변경
      $(".gnb > li > a,.sns > li > a,.total a").css({"color":"var(--menu-color)"});
        //header 의 배경색 css 변경
        $("header").css({"background-color":"#fff"});
        //로고 이미지 경로 바꾸기
        $(".logo img").attr("src", "images/f7e5a0d5acf91.png");
  
      }else{
        $(".gnb > li > a,.sns > li > a").css({"color":"#fff"});
        $("header").css({"background":"none"});
        $(".logo img").attr("src", "images/4382b846517cf.png");
      }    
  
  
      if (winScroll >= 550) {
        //header 밑줄 생기기
        $("header").css({"border-bottom":"1px solid #ccc"});
        }else{
          $("header").css({"border":"0"});
        }    
    });
  }

		}).resize();

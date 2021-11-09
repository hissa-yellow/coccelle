$(function() {

  //slider
  $('.slider').slick({
    autoplay: true,//自動的に動き出すか。
    autoplaySpeed: 3000,//次のスライドにきり変わるまでの時間
    speed: 1000,//スライドの動きのスピード
    infinite: true, //スライドをループさせるかどうか。
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,//左右の矢印あり。
    prevArrow:'<div class="slick-prev"></div>',
    nextArrow:'<div class="slick-next"></div>',
    dots: true,//下部ドットナビゲーションの表示。
    pauseOnFoucus: false,
    pauseOnHover: false,//マウスホバーで一時停止を無効。
    pauseOnDotsHover: false,//ドットナビゲーションホバーで一時停止を無効。
  });

  $('.slider').on('touchmove', function(ever, slick, currentSlide, nextSlide){
    $('.slider').slick('slickPlay');
  });


  

  //picture slider 
  $('.picture-slider').slick( {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 6900,
    infinite: true,
    pauseOnHover: false,
    pauseOnFoucus: false,
    cssEase: 'linear',//動き方。スムーズに見せたいからlinear
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2.5,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 467,
        settings: {
          slidesToShow: 1.5,
        }
      }
    ]
  });



  //openbtn
  $('.openbtn').click(function() {
    $(this).toggleClass('active');
    $('.blurTrigger').toggleClass('blur');
    $('#g-nav').toggleClass('panelactive');
  });

  $('#g-nav a').click(function() {
    $('.openbtn').removeClass('active');
    $('.blurTrigger').removeClass('blur');
    $('#g-nav').removeClass('panelactive');
  });


  //a href
  $('a[href^="#"]').click(function() {
    var adjust = $(window).width() / 15;
    var speed = 800;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - adjust;
    $('body, html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });

  
});






//loading
$(window).on('load', function() {
  $('#splash').delay(1500).fadeOut('slow');//ローディング画面を1500ms待機してからfadeOut
  $('#splash_logo').delay(1200).fadeOut('slow');//ロゴを1200ms待機してからfadeOut

  fadeAnime();
  
});


function fadeAnime() {

  $('.fadeInUpTrigger').each(function() {
    var elemPos = $(this).offset().top-50;//要素より50px上
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if(scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeUp');

    } else {
      $(this).removeClass('fadeUp');
    }
  });


  //関数でまとめると、後に違う動きを追加できる
  $('.fadeDownTrigger').each(function() {

  });
}




function BlurTextAnimeControl() {
  $('.blurTrigger').each(function() {
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('blur');
    } else {
      $(this).removeClass('blur');
    }
  });
}

//画面をスクロールしたら動かしたい場合の記述
$(window).scroll(function() {
  fadeAnime();
  
});

//画面が読み込まれたらすぐに動かしたい場合の記述
//$(window).on('load', function() {に記述





//ページの読み込みが始まる
//HTMLの読み込みが終わる
//$(document).readyが実行 $(function() {
//画像など含めすべてのコンテンツの読み込みが終わる
//$(window).loadが実行
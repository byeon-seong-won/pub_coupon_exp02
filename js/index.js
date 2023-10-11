$(document).ready(function() {




   /*---------- main : tab script ----------*/
  // 상단 탭메뉴 클릭
  // $(".tabsection .tab li").click(function() {
  //   let result = $(this).attr("data-alt");
  //   $(".tabsection .tabContent>div").removeClass("active");
  //   $("#" + result).addClass("active");
  //   window.scrollTo({ top: 0});  
  // });

  // $(".tabsection .tab li").click(function() {
  //   $(this).addClass("on");
  //   $(this).siblings("li").removeClass("on");
  // });
  /*---------- /// tab script /// ----------*/








  /*---------- alert script ----------*/
  // 알림창 - 토글버튼
  $('.slider-toggle .slider').click(function(){
    $(this).parent('.slider-toggle')
        .toggleClass('left')
        .toggleClass('right');
  });


  // 알림창 팝업
  let right;
  $('.slider').click(function() {
    if(right !== true) {
      $(".modal_del").fadeIn();
    }
    right = false;
  })
  $(".close_no, .close_btn").click(function() {
    $(".modal_del").fadeOut();
    $('.slider-toggle').removeClass('right')
    right = false;
  })

  $(".close_yes").click(function() {
    $(".modal_del").fadeOut();
    $('.slider-toggle').removeClass('left')
    right = true;
  })
  /*---------- /// alert script /// ----------*/








  /*---------- faq script ----------*/
   /* accordion */
   $(".accordion_title").click(function() {
    $(this).find("p").toggleClass("active");     
    $(this).addClass("active");
    $(this).find("img").toggleClass("active");
    $(this).next().stop().slideToggle();
  });

   /*---------- /// faq script /// ----------*/








    /*---------- detail : tab script ----------*/
    // 상단 탭메뉴 클릭
    $(".tabmenu .tab li").click(function() {
      let result = $(this).attr("data-alt");
      $(".tabmenu .tabContent>div").removeClass("active");
      $("#" + result).addClass("active");
      window.scrollTo({ top: 0});  
    });

    $(".tabmenu .tab li").click(function() {
      $(this).addClass("on");
      $(this).siblings("li").removeClass("on");
    });
    /*---------- /// detail : tab script /// ----------*/





    


    /*---------- subsc script ----------*/
    // 구독하기 클릭
    $(".subscBtn").click(function() {
      $(".pur_detail").css({"bottom":"0","z-index":"10000"})
      $(".pur_detail").css({"display":"block"})
      $(".cardInput").css({"display":"none"})
      $(".pur_detail_wp").css({"display":"block"})
      $(".subscBtn>button").text("구독 결제 하기");
      $(".subscBtn>button").css({"backgroundColor" : "#F5BD1A", "color" : "#5E5050"})
    })
    
    // 구독하기 - 닫기 클릭
    $(".pur_detail .close").click(function() {
      $(".pur_detail_wp").css({"display":"none"})
    })

    // 카드 클릭시 노출
    $(".pur_detail .card").click(function() {
      $(".cardInput").css({"display":"block"})
      $(".pur_detail").css({"display":"none"})
      $(".pur_detail_wp").css({"display":"block"})
      $(".subscBtn>button").text("다음");
      $(".subscBtn>button").css({"backgroundColor" : "#D9D9D9", "color" : "rgba(94, 80, 80,0.3)"})
    })

    // 카드 클릭시 노출 - 닫기 클릭
    $(".cardInput .close").click(function() {
      $(".pur_detail_wp").css({"display":"none"})
      $(".subscBtn>button").text("구독 결제 하기");
      $(".subscBtn>button").css({"backgroundColor" : "#F5BD1A", "color" : "#5E5050"})
      clicked = true;
    })

     /*---------- /// subsc script /// ----------*/









    
    /*---------- 결제수단 변경 ----------*/
    let click = true;

    $(".couponBtn .modi").click(function() {
      if(click == true) {
        $(".pur_detail").css({"bottom":"0","z-index":"10000"})
        $(".pur_detail.final").css({"display":"none"})
        $(".pur_detail.first").css({"display":"block"})
        $(".pur_detail_wp").css({"display":"block"})
        $(".couponBtn .back").css({"display":"none"})
        $(".couponBtn .modi").text("결제 수단 등록하기");
        $(".couponBtn .modi").css({"backgroundColor" : "#FFD200"}) 
        click = false; 
      } else {
        $(".pur_detail").css({"bottom":"0","z-index":"10000"})
        $(".pur_detail.final").css({"display":"block"})
        $(".pur_detail.first").css({"display":"none"})
        $(".couponBtn>button").text("구독 결제 하기");
        click = false;
      }
    })
    
    // 구매하기 - 닫기 클릭
    $(".pur_detail .close").click(function() {
      $(".pur_detail_wp").css({"display":"none"})
      $(".couponBtn .back").css({"display":"block"})
      $(".couponBtn .back").text("이전");
      $(".couponBtn .modi").text("결제 수단 변경");
      click = true;
    })
    /*---------- 결제수단 변경 ----------*/


    







    //  include
    $(document).ready(function () {
        $("#header").load("header.html");  
        $("#footer").load("footer.html");  
    });











});
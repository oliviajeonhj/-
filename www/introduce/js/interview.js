$(document).ready(function(){ // 페이지가 열리면 실행

     $("#interview dt").click(function(){
         $(this).toggleClass('show').siblings().removeClass('show');
     });

     $(".depth1 a").click(function(e){ //매개변수 e는 이벤트를 위미함

        e.preventDefault(); //a태그의 고유의 기능 막는다
        var targetPos = $($(this).attr('href')).offset().top;
        $('body, html').animate({'scrollTop':targetPos});

     });

     $(".myintroduceslider").owlCarousel(); //저 객체만을 위한 공용의 플러그인 실행




});
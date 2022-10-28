$(document).ready(function(){
  
  $(window).scroll(function(){
    if($(window).scrollTop() > 0 ){
      $('body').addClass('scroll');
    } else {
      $('body').removeClass('scroll');
    } 
  }) ////스크롤 했을때 네비메뉴에 scroll 클래스 넣었다 빼기
 
  $("#allMenu").click(function(){
    $(this).toggleClass('open');
  }); ////반응형. 햄버거 메뉴 클릭했을때 li 보이게 

    const nvDB = [
      ['소개합니다','#introduce'],
      ['포트폴리오','#portfolio'],
      ['미리인터뷰','#preInterview'],
      ['연락처','#contact']
    ];
  
    let nvli ='';
    for(let i in nvDB){
      nvli += `<li><a href="${nvDB[i][1]}"> ${nvDB[i][0]} </a></li>`
    };
  
    $('.depth1').html(nvli);
  
    //각 섹션타이틀 링크텍스트와 매치하기
    $('.sectionTitle:not(#preInterview)').each(function(){
      $(this).find('h2').html(nvDB[$(this).index()][0])
    }); //each
  
    //네비 슬라이드 섹션이동
    $(".depth1 a").click(function(e){
      e.preventDefault();
      const topPlace = $($(this).attr('href')).offset().top;
      $('body, html').animate({'scrollTop': topPlace});
      
      $(this).parent().addClass('active').siblings().removeClass('active');
      
      // $(".depth1 li").removeClass('active')
      // $(this).parent().addClass('active')
      
    })

    $("#preInterview dt").click(function(){

      $(this).toggleClass('act').siblings('dt').removeClass('act');
      
    }); //// 사전인터뷰 제목 클릭 시 내용 보이게

    var toggleall = false;
    $("#allBtn_interview").click(function(){
      if(toggleall){
        toggleall = false;
        $(this).html('전체열기')
        $("#preInterview dt").removeClass('act')    

      }else{
        $(this).html('전체닫기')
        toggleall = true;
        $("#preInterview dt").addClass('act')
      }
    }); 
  

      const swiper = new Swiper('.swiper', {
          loop: true,
  
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });

  });
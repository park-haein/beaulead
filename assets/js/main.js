//main.js

/** 스크롤 헤더 감지 shadow 추가 */
$(window).scroll(function(){
    if ( $(document).scrollTop() > 50 ){
        $(".g_header").addClass("shadow");
    } else {
        $(".g_header").removeClass("shadow");
    }
})
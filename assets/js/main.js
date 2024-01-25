//main.js

$(window).scroll(function(){
    if ( $(document).scrollTop() > 50 ){
        $(".g_header").addClass("shadow");
    } else {
        $(".g_header").removeClass("shadow");
    }
})
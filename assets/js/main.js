//main.js

/** 스크롤 헤더 감지 shadow 추가 */
document.addEventListener("DOMContentLoaded", function() {
    var gHeader = document.querySelector(".g_header"); 

    window.addEventListener("scroll", function() {
        if (document.documentElement.scrollTop > 50 || document.body.scrollTop > 50) { // 스크롤 50이상 이면
            gHeader.classList.add("shadow"); 
        } else {
            gHeader.classList.remove("shadow");
        }
    });
});
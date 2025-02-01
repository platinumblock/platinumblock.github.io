var body = document.body;
var html = document.documentElement;
/* 3 layers of protection against the spline watermark :) */
setTimeout(() => {
    if(document.getElementById("spline2").shadowRoot.getElementById("logo") != null){
        document.getElementById("spline2").shadowRoot.getElementById("logo").remove();
    }
}, 200);
setTimeout(() => {
    if(document.getElementById("spline2").shadowRoot.getElementById("logo") != null){
        document.getElementById("spline2").shadowRoot.getElementById("logo").remove();
    }
}, 500);
setTimeout(() => {
    if(document.getElementById("spline2").shadowRoot.getElementById("logo") != null){
        document.getElementById("spline2").shadowRoot.getElementById("logo").remove();
    }
}, 1000);
var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
function align(){
    var abouts = document.getElementsByClassName("aboutMe");
    for(var i = 0; i < abouts.length; i++){
        var top = (40 + 50 * i - (window.scrollY / height) * 390);
        abouts[i].style.top = top + "%";
        if(top < 72 && top > 20){
            abouts[i].style.opacity = 1;
            abouts[i].style.transform = "scale(1)";
        }else{
            abouts[i].style.opacity = 0;
            abouts[i].style.transform = "scale(0)";
        }
    }
}
window.onscroll = align;
align();
function openSong(){
    window.open("https://www.youtube.com/watch?v=c0hlF5ANkR0", "_blank").focus();
}
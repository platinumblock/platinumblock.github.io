var body = document.body;
var html = document.documentElement;

function view(project){
    if(project == "doorlist"){
        localStorage.setItem("height100", 11596);
    }
    if(project == "dcyhc"){
        localStorage.setItem("height100", 13529);
    }
    if(project == "converse"){
        localStorage.setItem("height100", 3115);
    }
    if(project == "lucidide"){
        localStorage.setItem("height100", 1809);
    } /* ADD a new one for each project */
    setTimeout(() => {
        window.location.href = project + ".html";
    }, 500);
}

window.onscroll = function (e) {  
    var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    var scrollY = window.scrollY || window.pageYOffset;
    var works = document.getElementsByClassName("work");
    document.getElementById("scrollIndicator").style.opacity = (1 - 10 * scrollY / height);
    for(var i = 0; i < works.length; i++){
        var newLeft = 115 + (i * 65) - 395 * (scrollY / height)
        works[i].style.left = newLeft + "%";
        if(newLeft > -15 && newLeft < 50){
            works[i].style.transform = "scale(1)";
        }else{
            works[i].style.transform = "scale(0.5)";
        }
    }
} 
/* 3 layers of protection against the spline watermark :) */
setTimeout(() => {
    if(document.getElementById("spline").shadowRoot.getElementById("logo") != null){
        document.getElementById("spline").shadowRoot.getElementById("logo").remove();
    }
}, 200);
setTimeout(() => {
    if(document.getElementById("spline").shadowRoot.getElementById("logo") != null){
        document.getElementById("spline").shadowRoot.getElementById("logo").remove();
    }
}, 500);
setTimeout(() => {
    if(document.getElementById("spline").shadowRoot.getElementById("logo") != null){
        document.getElementById("spline").shadowRoot.getElementById("logo").remove();
    }
}, 1000);
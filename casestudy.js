var body = document.body;
var html = document.documentElement;
var heightAt100 = localStorage.getItem("height100")
var height = heightAt100; 
var numerals = ["I", "II", "III", "IV", "V"]
var ranges = []
var contents = document.getElementsByClassName("content");

setTimeout(() => {
    height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    //console.log(height);
    document.getElementById("sidebar").style.height = (height - 400 * (height / heightAt100)) + "px";
    body.style.height = (height - 400 * (height / heightAt100)) + "px";
    for(let i = 0; i < contents.length; i++){
        var n = numerals[i];
        ranges.push(document.getElementById(n).offsetTop);
    }
}, 100);
function handleScroll(){
    if(window.scrollY > 0){
        document.getElementById("scrollIndicator2").style.display = "none";
    }else{
        document.getElementById("scrollIndicator2").style.display = "block";
    }
    var scroll = window.scrollY -  100 * (height / heightAt100);
    document.getElementById("bannerLeft").style.left = (-1.15 * 100 * (window.scrollY / window.innerHeight)) + "%";
    document.getElementById("bannerRight").style.left = (50 + 1.15 * 100 * (window.scrollY / window.innerHeight)) + "%";
    for(let i = 0; i < ranges.length; i++){
        if(scroll > ranges[i] && (i == ranges.length - 1 || scroll < ranges[i + 1])){
            for(let j = 0; j < contents.length; j++){
                if(i == j){
                    contents[j].style.color = "var(--darkprimary)";
                }else{
                    contents[j].style.color = "var(--darksecondary)";
                }
            }
            break;
        }
    }
}
window.addEventListener("scroll", handleScroll);
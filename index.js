var body = document.body;
var html = document.documentElement;
// Get height of page (in pixels)
var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
// Set height of sidebar
document.getElementById("sidebar").style.height = height + "px";
// Make list of y cutoffs for sections
var numerals = ["I", "II", "III", "IV", "V"]
var ranges = []
var contents = document.getElementsByClassName("content");
for(let i = 0; i < contents.length; i++){
    var n = numerals[i]
    ranges.push(document.getElementById(n).offsetTop + document.getElementById(n).style.height)
}
// Height of page at 100% zoom (in pixels)
var heightAt100 = 5400
// On scroll:
function handleScroll(){
    var scroll = window.scrollY -  200 * (height / heightAt100);
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
window.addEventListener("scroll", handleScroll)
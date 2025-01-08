var body = document.body;
var html = document.documentElement;
// Height of page at 100% zoom (in pixels)
var heightAt100 = 5896 // UPDATE THIS when you change the contents of the page
var height = heightAt100; 
var numerals = ["I", "II", "III", "IV", "V"]
var ranges = []
var contents = document.getElementsByClassName("content");
// Wait for images to load
setTimeout(() => {
    // Set height of sidebar
    height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    document.getElementById("sidebar").style.height = (height - 400 * (height / heightAt100)) + "px";
    // Make list of y cutoffs for sections
    for(let i = 0; i < contents.length; i++){
        var n = numerals[i]
        ranges.push(document.getElementById(n).offsetTop)
    }
}, 1000);
// On scroll:
function handleScroll(){
    var scroll = window.scrollY -  150 * (height / heightAt100);
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
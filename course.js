//<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjv2Br4PI8ZFshXr9XVtedypJe_7an1Izy1-qR_rYjBYUtIrYrAiFmea0S76q3TV1Dtjc&usqp=CAU' width='100' height='100'>")
let rate=prompt("rate our page from 1 to 5");
rate=parseInt(rate);
var starsContainer = document.getElementById("starsContainer");
starsContainer.innerHTML = "";
for(let i=1;i<=rate;i++){
    var starImg = document.createElement("img");

    starImg.src ="star.jpg";
    
    starImg.alt = "Star";
    
     starImg.className = "star";
    
     starsContainer.appendChild(starImg);
}
 window.onload = function() {

rateWebsite();
 };
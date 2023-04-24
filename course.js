
function rateWebsite() {

     var rate = prompt("Please rate our website from 1 to 5:");
    
    
    
     rate = parseInt(rate);
    
    
    
     if (isNaN(rate) || rate < 1 || rate > 5) {
    
    alert("Invalid rating. Please enter a number between 1 and 5.");
    
     return;
    
     }
    
     var starsContainer = document.getElementById("starsContainer");
    
    starsContainer.innerHTML = "";
   for (var i = 0; i < rate; i++) {
    
    var starImg = document.createElement("img");
    
   starImg.src = "star.png";
    
    starImg.alt = "Star";
    
   starImg.className = "star";
    
     starsContainer.appendChild(starImg);
    
    }
    
     }
    
     window.onload = function() {
    
    rateWebsite();
    
    };
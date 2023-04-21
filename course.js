//<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjv2Br4PI8ZFshXr9XVtedypJe_7an1Izy1-qR_rYjBYUtIrYrAiFmea0S76q3TV1Dtjc&usqp=CAU' width='100' height='100'>")
let rate=prompt("rate our page from 1 to 5");
rate=parseInt(rate);
for(let i=1;i<=rate;i++){
var img= document.createElement('img');
img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjv2Br4PI8ZFshXr9XVtedypJe_7an1Izy1-qR_rYjBYUtIrYrAiFmea0S76q3TV1Dtjc&usqp=CAU' width='100' height='100"
img.style.position='fixed';
img.style.bottom='0';
img.style.left='0';
img.style.right='0';


document.body.appendChild(img);
}
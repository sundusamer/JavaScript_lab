let conf=confirm("do you want to take a short quiz quiz");
if(conf)
{
    let count=0;

    let num=prompt("1. enter a number between 1 and 100 that is divisible by 3,5,10 and 15?"); //30,60,90
    num=parseInt(num);
   if(num===30||num===60||num===90)
   {
    count+=2;
    
}
alert(count);
   let o=prompt("2. What element does O represent on the periodic table?");
   if(o==="oxygen")
   {
    count+=2;
    
   }
   alert(count);
   let c=prompt("what is the capital of Italy ?")
   if(c==="rome"){
    count+=2;
    
}
alert(count);
   let m=prompt("How many Continents are there?");
   m=parseInt(m);
   if(m===7)
   {
    count+=2;
    
   }
   else if(m===6||m===8){
count++;
   }
if (count>=4){
    alert("pass :) "+"your grade is : " +count )
}
else{
    alert("failed "+count)
}
}
else{
    alert("OK")
}



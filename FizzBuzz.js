//FizzBuzz.js
for(var i=0;i<=100;i++){
if(i==0){
    fizzbuzz(i)
}
else if (i % 15 == 0){
        fizzbuzz("FizzBuzz");
        }
else if(i%3==0){
    fizzbuzz("FIZZ");
}else if(i%5==0){
    fizzbuzz("BUZZ");
}
else{
    fizzbuzz(i)
}
}
function fizzbuzz(i){
    document.write(i);document.write("<br>");
}
//Find the nth non repeating charecter in the string
let str = '324yrw8yfhdvgerur76erjhv 3246sddfjsgdfjsdfsdfjgsdjfjsdfj';
let strObj ={}
let min=[];
for  (let i of str){
  //console.log(min)
  if(strObj[i]===undefined){
    strObj[i]=1;
    //console.log(i)
    min.push(i);
  }else{
    
    var idx = min.indexOf(i);
    if(idx!==-1){
    min.splice(idx, 1);//console.log('splicing'+idx,i)
    }
    
    strObj[i]=strObj[i]+1;
  }
}
let n =0;
console.log(min[n]);


//Find first duplicate
let str = '1441332';
let key={}
let min=[]
for (let i of str){
  if(key[i]===undefined){
    key[i]=1;
    //first instance
  }else{
    key[i]=key[i]+1;
    if(key[i]===2){
      min.push(i);
    }else{
        let index=min.indexOf(i);
    if(index!==-1)
         { 
           min.splice(index,1);
           
         }
    }

  }
}

console.log(min[0]);

//Check if Palindrome

var letters = [];
var name = prompt("What is your name?");
var reverseName = "";

for (var i = 0; i < name.length; i++) {
  letters.push(name[i])
}
for (var i = 0; i < name.length; i++) {
  reverseName = reverseName + letters.pop();
}
if (reverseName == name) {
  document.write("It's a palindrome! Very Cool 🎉");
} else {
  document.write("not a palindrome, Sorry #_____#")
}
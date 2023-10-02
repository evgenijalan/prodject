"use strict";
/*let a = 11;

if (a > 0){
    console.log('Nice');
}else if(a < 0){
    console.log('Fack')
}else{
    console.log('Bad');
}

switch(a){
    case 0:
        console.log('ziro')
        break;
    case 1:
        console.log('Adyn');
        break;
    default:
        console.log('blet!');
        break;        
}

for(let i = 2; i < 8; i= i + 2){
    console.log(i);
}
let a = 1;

while (a < 5){
    if( a == 3){
        continue;
    }
    console.log(a);
    a ++;
}*/
// Функции=============================================================
function sum(a, b) {
    console.log(a + b);
}

sum(2, 3);

function foo(a, b) {
    return a + b;
}

let a = foo( 2, 2); 
console.log(a);

let summ = (a, b)=> {
    console.log (a + b);
}

sum( 5, 2);
console.log(typeof(sum));
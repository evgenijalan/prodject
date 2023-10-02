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


let a = 1,
    b = 0;

while (a < 7){
    a ++;
    if( a == 4){
        continue;
    }
    b = a - 1;
    console.log(b);

}
*/
// Функции=============================================================
/*function sum(a, b) {
    console.log(a + b);
}

sum(2, 3);

function foo(a, b) {
    return a + b;
}

let aa = foo( 2, 2); 
console.log(aa);

let summ = (a, b)=> {
    console.log (a + b);
}

sum( 5, 2);
console.log(typeof(sum));
*/
// методы и свойства строк и чисел =======================

let str = 'вася доит корову';

console.log(str.indexOf('доит'));
console.log(str.slice(5, 9));
console.log(str.substring(10, 17));
console.log(str.substr(5, 4));
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

const num = '12.222px';
const num2 = 12.222;

console.log(Math.round(num));
console.log(Math.round(num2));
console.log(parseInt(num));
console.log(parseInt(num2));
console.log(parseFloat(num));
console.log(parseFloat(num2));
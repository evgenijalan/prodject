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
/*
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
*/

// exercise function, prompt, array ===================================
/*
let name,
    surname;

const data = {
    name: {},
    dish: [],
    comment: [],
};

function yourName(){
    name = prompt('Ваше имя?');
    surname = prompt('Ваша фамилия?');

    while(name =='' || name == null || surname == '' || surname == null){
        name = prompt('Ваше имя?');
        surname = prompt('Ваша фамилия?');
    }
}

yourName();

function yourNameData() {
    data.name['name'] = name;
    data.name['surname'] = surname;
}

yourNameData();

function dishData(){
    for(let i = 1; i < 3; i++){
        data.dish[i - 1] = prompt(`dish ${i}`);
    }
}

dishData();

function commentData(){
    data.comment[0] = prompt('Введите свой комментарий').toLowerCase();
}

commentData();

console.log(data);
console.log(data.comment);
console.log(data.comment.length);
console.log(data.comment[0].indexOf('qqq'));
console.log(data.comment[0].substr(data.comment[0].indexOf('qqq'), 3));
*/

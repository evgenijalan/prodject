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
// Функции========================================================================
//--------------------------------------------------------------------------------
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
// методы и свойства строк и чисел ===============================================================
//------------------------------------------------------------------------------------------------
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

// exercise function, prompt, array ===============================================
//-------------------------------------------------------------------------------
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

//calc ============================================================================
//---------------------------------------------------------------------------------
/*
let num1,
    num2,
    simbol,
    result;

function enterNumber(){
    num1 = +prompt('enter number');
    while(num1 == '' || num1 == null || isNaN(num1)){
        num1 = +prompt('ERROR! enter number');
    }

    simbol = prompt('enter simbol');
    while(simbol != '/' && simbol != '*' && simbol != '-' && simbol !='+'){
        simbol = prompt('ERROR!  enter simbol');
    }

    num2 = +prompt ('enter number');
    while(num2 == '' || num2 == null || isNaN(num2)){
        num2 = +prompt('ERROR! enter number');
    }
}

enterNumber();

//--------------------------------------------------------------------------------------------

function calc(s) {
    switch(s) {
        case '+':
            result = num1 + num2;            
            break;
        case '-':
            result = num1 - num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '*':
            result = num1 * num2;
            break;    
    }
    console.log(result);
}

calc(simbol);
*/

//function деструктуризация ============================================
//---------------------------------------------------------------------
/*
const personalDB = {
    name: 'Alan',
    surname: ' Grant',
    age: 33,
    mission : function() {
        console.log(`${personalDB.name} ${personalDB.surname}`);
    }
};

personalDB.mission();

for(let key in personalDB){
    console.log(personalDB[key]);
}

console.log(Object.keys(personalDB));
console.log(Object.keys(personalDB).length);

const {name} =  personalDB;
console.log(name);

//---------------------------------------------------------------------------

function calcValue(a, b){
    return [
        a + b,
        a - b,
        a * b,
        a / b,
    ]
}

const [sum,, mult] = calcValue( 2, 5);
console.log(sum, mult);

//---------------------------------------------------------------------------

const personal = {
    name: 'Max',
    age: 20,
    adress: {
        country: 'Russian',
        city: 'Moscow',
    },
};

//const {name} = personal;
//console.log(name);

const {name: firstName, age, car = 'Машины нет', adress: {city}} = personal;
console.log(firstName,age, car, city);
*/


// массивы с свойства ----------------------------------------------------------

// const arr = ['alan', 'grant', 20, 'meried'];

// for(const key of arr){
//    console.log(key);
// }

// arr.forEach(function(key, i) {
//     console.log(`${i}: ${key}`);
// });

// let arrStr = arr.join(' ');
// console.log(arrStr);
// let strArr = arrStr.split(' ');
// console.log(strArr);
// console.log(arr.sort());

// -------------------------------------------------------------------------

// const arr = [1, 2, 3, 4];

// let sum = arr.reduce(function(elem, summ){
//     let rezult = elem + summ;
//     console.log(summ, elem);
//     return rezult;
// });

// console.log(sum);

let array = [1,2,3,4]

  function sumElem(accumulator, currentValue) {
      let sum = accumulator + currentValue
      return sum
  }
  let result = array.reduce(sumElem, 11);
  console.log(result);


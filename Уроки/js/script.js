"use strict";
/*
let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number);
let arr = ['plum', 'orange', 'apple'];
console.log(arr[1]);

let numberOfFilms = +prompt( 'Сколько фильмов вы посмотрели', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt('Один из последних фильмов?' , ''),
      b = prompt('На солько оцениваете его?', ''),
      c = prompt('Один из последних фильмов?' , ''),
      d = prompt('Один из последних фильмов?' , '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);
*/

// Условия =================================
//------------------------------------------
/*
const num = 59;

if( num < 50){
    console.log('Хули так мло ?');
}else if(num > 100){
    console.log('Дохера');
} else{
    console.log('В точку сука!!!!');
}

(num ===50)? console.log('ok'):console.log('error');
//------------------------------------------------------
switch(num){
    case 58:
        comsole.log('no');
        break;
    case 59:
        console.log('Ya');
        break;
    case 60:
        console.log('no');
        break;
    default:
        console.log('fask');
        break;        
}
*/
// ЦЫКЛЫ=========================================
//-----------------------------------------------
/*
let numm = 50;

while(numm < 55){
    console.log(numm);
    numm++;
}

do {
    console.log(numm);
}
while(numm > 55);

//-------------------------------------------------

for (let i = 1; i < 8 ; i++){
    if(i === 6){
        //break;
        continue;
    }
    console.log(i);
}

*/
//Функции===================================
//-------------------------------------------
/*let b;

function showFilmMessage(){
    console.log('Hello this world');
    let a = 20;
    b = 10;   
}
showFilmMessage();
//console.log(a);

//--------------------------------------------

function calc(a, b){
    return( a + b);
}

console.log(calc(2, 3));

//--------------------------------------------

function ret() {
    let nam = 50;
    return nam;
}

const resultNam = ret();
console.log(resultNam);

const logger = function(){
    console.log('hello');
};

logger();

const calc = (a, b) => {
    return a + b
};
*/
// Методы и свойства строк чисел ======================
//-------------------------------------------------------
/*
const str = 'test';

console.log(str.length);
console.log(str.toUpperCase());
let fruit = 'Some fruit';

console.log(fruit.indexOf('fruit'));
console.log( fruit.slice(5,10));
console.log( fruit.substring(5, 10));

console.log(fruit.substr(5, 5));

const num = 12.2;
console.log(Math.round(num));

const test = '12.2px';
console.log(parseInt(test));
console.log(parseFloat(test));
*/

// колбек функции ======================================
//------------------------------------------------------
/*
function first(){
   setTimeout(function(){
    console.log(1);
   }, 1000);  
}

function second() {
    console.log(2);
}

first();
second();

//--------------------------------------------------
function lernJS(lang, callback){
    console.log(`я учу ${lang}`);
    callback();
}

lernJS('JavaScript', function() {
    console.log('Я прошел этот урок');
});
*/

//  Объекты, деструктуризация объектов (ES6) ========
//-----------------------------------------------------
/*
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        background: 'red',
    },
    makeTest: function() {
        console.log('test!');
    }
}

options.makeTest();

console.log(options.name);
*/
//--------------------------------------------------------
/*
for (let key in options) {
    if( typeof(options[key]) === 'object'){
        for (let i in options[key]){
            console.log(`Свойство ${i}  имеет значение ${options[key][i]}`); 
        }
    }else{
        console.log(`Свойство ${key}  имеет значение ${options[key]}`);
    }
}

console.log(Object.keys(options).length);

const {border} = options.colors;

console.log(border);
*/

// Массиыф псевдомассивы =======================================
//--------------------------------------------------------------
/*
const arr = [1, 2, 3, 6, 8];

//arr.pop();
arr.push(10);

console.log(arr);

//---------------------------------------------------------

for ( let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//------------------------------------------------------

for (let value of arr){
    console.log(value);
}

//-------------------------------------------------------

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

//------------------------------------------------------

const str = prompt('', '');
const products = str.split(', ');
console.log(products);

//---------------------------------------------------------

const arr = ['alan', 'grant', 22, 'study'];
console.log(arr.sort());
console.log(arr.join(' '));

//----------------------------------------------------------

const array = [ 1, 13, 2, 16, 8, 22];
array.sort(compareNum);
console.log(array);

function compareNum(a, b) {
    return a - b;
}
*/
// Передача по ссылке или по значению, Spread оператор ==========
//---------------------------------------------------------------
/*
// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4,
    }
};

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// console.log(newNumbers);
// console.log(numbers);

const add = {
    d: 17,
    e: 20,
};

console.log(Object.assign(numbers, add));

//------------------------------------------------------------------

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

oldArray[2] = 'd';

console.log(newArray);
console.log(oldArray);

//-------------------------------------------------------------------

const video = ['youtube', 'video', 'rutube'],
      blog = ['wordpress', 'livejornal', 'blogger'],
      internet = [...video, ...blog, 'vk', 'facebook'];
      console.log(internet);

//--------------------------------------------------------------------

function log(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];
log(...num);

//---------------------------------------------------------------------

const array = ['a', 'b'];

const newArr = [...array];
console.log(newArr);

//--------------------------------------------------------------------

const q = {
    one: 1,
    two: 2
}

const newQ = {...q};

console.log(newQ);
*/

// основы ООП ==========================================================
//----------------------------------------------------------------------
/*
const soldier = {
    health: 400,
    armor: 100,
    sayHello: function(){
        console.log('Hello');
    }
};

const john = Object.create(soldier);

// const john = {
//     health: 100,
// };

//Object.setPrototypeOf(john, soldier);
john.sayHello();
*/
// Отлавливаем ошибки========================================================
//---------------------------------------------------------------------------


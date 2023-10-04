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


for (let i = 1; i < 8 ; i++){
    if(i === 6){
        //break;
        continue;
    }
    console.log(i);
}

*/
//Функции===================================
/*let b;

function showFilmMessage(){
    console.log('Hello this world');
    let a = 20;
    b = 10;   
}
showFilmMessage();
//console.log(a);

function calc(a, b){
    return( a + b);
}

console.log(calc(2, 3));

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

function lernJS(lang, callback){
    console.log(`я учу ${lang}`);
    callback();
}

lernJS('JavaScript', function() {
    console.log('Я прошел этот урок');
});
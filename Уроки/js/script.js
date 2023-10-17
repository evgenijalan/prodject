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
// Динамическая типизация========================================================
//---------------------------------------------------------------------------
/*
//To string
console.log(typeof(String(null)));
console.log(typeof(5 + ''));
const fontSize = 26 + 'px';

// To number
console.log(typeof(Number('5')));
console.log(typeof(+'5'));
console.log(typeof(parseInt('15px', 10)));

//To boolean 
//1)
let switcher = null;
if (switcher) {
    console.log('working...');
}
switcher = 1;
if (switcher) {
    console.log('working...');
}
//2)
console.log(typeof(Boolean('4')));
*/

//Получение элементов со страници=================================================
//--------------------------------------------------------------------------------

/*
const box = document.getElementById('box');

console.log(box);

const btns = document.getElementsByTagName('button');

console.log(btns);
console.log(btns[2]);

const btn = document.getElementsByTagName('button')[1];
console.log(btn);

const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll('.heart');
console.log(hearts);

hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);
*/

//действие с элементами на странице=============================================
//------------------------------------------------------------------------------

/*
const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circle = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

box.style.background = 'blue'; 
box.style.width = '500px'; 

box.style.cssText = 'background-color: red';

btns[1].style.borderRadius = '100%';
circle[0].style.backgroundColor = 'red';

for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'blue';
}

hearts.forEach(item => {
    item.style.backgroundColor = 'pink';
});

const div = document.createElement('div');
//const text = documemt.createTextNode('this i am');

div.classList.add('black');
document.body.append(div);
//document.querySelector('.wrapper').append(div);
//wrapper.append(div);
//wrapper.prepend(div);
//hearts[0].before(div);
//hearts[0].after(div);
//circle[0].remove();
//hearts[0].replaceWith(circle[0]);

// устаревшее 
//wrapper.appendChild(div);
//wrapper.insertBefore(div, hearts[0]);
//wrapper.removeChild(hearts[1]);
//wrapper.replaceChild(circle[0], hearts[0]);

// работа с текстом
div.innerHTML = '<h1>Hello world</h1>';
//div.textContent = 'hello world';
div.insertAdjacentHTML('beforeBegin', '<h2>hello</h2>');
*/
//события и их обработчики===========================================================================================
//--------------------------------------------------------------------------------------------------------------------
/*
const btn = document.querySelector('button'),
      btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('click');
// };

// btn.addEventListener('click', () => {
//     alert('Click');
// });

// btn.addEventListener('mouseenter', (e) => {
//     e.target.remove();
//     console.log('Hover');
// });

// btn.addEventListener('click', (e) => {
//     e.target.remove();
//     console.log('Hover');
// });

let i = 0;
const deleteElement = (e) => {
    //console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if(i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};
btn.addEventListener('click', deleteElement);
//btn.removeEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);


const link = document.querySelector('a');

link.addEventListener('click', function(e) {
    e.preventDefault();

    console.log(e.target);
});

btns.forEach((item) => {
    item.addEventListener('click', (e) => {
        console.log(e.target);
    });
});
*/

//032 Навигация по DOM - элементам, data-атрибуты, преимущество for_of=========================
//------------------------------------------------------------------------------------------
//ПОЛУЧЕНИЕ УЗЛОВ
//console.log(document.body);
// console.log(document.documentElement);
//console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.querySelector('#current').parentNode);
// console.log(document.querySelector('#current').parentNode.parentNode);
// console.log(document.querySelector('[data-current]').nextSibling);
// console.log(document.querySelector('[data-current]').previousSibling);

//ПОЛУЧЕНИЕ ЭЛЕМЕНТОВ
// console.log(document.querySelector('[data-current]').nextElementSibling);
// console.log(document.querySelector('#current').parentElement);
// console.log(document.body.firstElementChild);

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }

    console.log(node);
}


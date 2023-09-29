"use strict";

let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number);
let arr = ['plum', 'orange', 'apple'];
console.log(arr[1]);

/*let numberOfFilms = +prompt( 'Сколько фильмов вы посмотрели', '');

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

// ЦЫКЛЫ=========================================

let numm = 50;

/*while(numm < 55){
    console.log(numm);
    numm++;
}

do {
    console.log(numm);
}
while(numm > 55);
*/

for (let i = 1; i < 8 ; i++){
    if(i === 6){
        //break;
        continue;
    }
    console.log(i);
}

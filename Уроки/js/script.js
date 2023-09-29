"use strict";

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
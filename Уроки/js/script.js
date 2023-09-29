"use strict";

/*let num = 0;

if (num > 0){
    console.log('norm');
}else if(num < 0){
    console.log('very bad');
}else if(num === 0){
    console.log('bad');
}
*/
// 1 //12 ==========================================================================
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
// 2/15======================================================

let numberOfFilms = +prompt( 'Сколько фильмов вы посмотрели', '');
if(numberOfFilms != '' && numberOfFilms != null){
     
    if(numberOfFilms < 10){
        console.log(' Просмоьренно мало фильмов');
    }else if(numberOfFilms >= 10 && numberOfFilms <= 30){
        console.log('Вы классный зритель');
    }else if(numberOfFilms > 30){
        console.log('Задрот');
    }
}else{ 
    console.log( 'Error');
}     
    
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for(let i = 0; i < 2; i ++ ){
    const a = prompt('Один из последних фильмов?' , ''),
          b = prompt('На солько оцениваете его?', '');
          if(a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50){
            personalMovieDB.movies[a] = b;
          }else{
            console.log('error');
            i--;
          }    
}

console.log(personalMovieDB);

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
/*
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
*/
// 3 / 18============================================
/*
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов ты посмотрел?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов ты посмотрел?', '');        
    }
}

start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel (){
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
}
detectPersonalLevel();

function showMyDB() {
    if(personalMovieDB.privat === false){
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres (){
    for(let count = 0; count < 3; count ++){ 
    
        personalMovieDB.genres[count] = prompt(`Ваш любимый Жанр под номером ${count + 1}`);
    }
}

writeYourGenres();

console.log(personalMovieDB.genres);
*/

// 4 / 24 ==================================================================================================
//----------------------------------------------------------------------------------------------------------



const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
            personalMovieDB.count = +prompt('Сколько фильмов ты посмотрел?', '');
        
            while(personalMovieDB.count == '' || personalMovieDB.count== null || isNaN(personalMovieDB.count)) {
                personalMovieDB.count = +prompt('Сколько фильмов ты посмотрел?', '');        
            }
        },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function (){
        if(personalMovieDB.count != '' && personalMovieDB.count != null){
         
            if(personalMovieDB.count < 10){
                console.log(' Просмоьренно мало фильмов');
            }else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
                console.log('Вы классный зритель');
            }else if(personalMovieDB.count > 30){
                console.log('Задрот');
            }
        }else{ 
            console.log( 'Error');
        }  
    },
    showMyDB: function () {
        if(personalMovieDB.privat === false){
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function(){
        for(let count = 0; count < 3; count ++){ 
            const ganr = prompt(`Ваш любимый Жанр под номером ${count + 1}`);

            if(ganr == '' || ganr == null){
                count--;
            } else{
                personalMovieDB.genres[count] = ganr;
            }    
        }
    },
    toogleVisibleMyDB: function() {
        if(personalMovieDB.privat == false) {
            personalMovieDB.privat = true;
        }else if (personalMovieDB.privat == true) {
            personalMovieDB.privat = false;
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+ 1} - это ${item}`)
        });
    }

};
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();
personalMovieDB.toogleVisibleMyDB();

console.log(personalMovieDB.genres);
console.log(personalMovieDB);

//--------------------------------------------------------------------------------------------


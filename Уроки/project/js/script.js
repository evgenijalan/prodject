/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promoRemove = document.querySelectorAll('.promo__adv img'),
      bgPromoReplace = document.querySelector('.promo__bg'),
      ganrReplace = bgPromoReplace.querySelector('.promo__genre'),
      moviList = document.querySelector('.promo__interactive-list'),
      filmList = document.querySelectorAll('.promo__interactive-list li');     

promoRemove.forEach(item => {
    item.remove();
});

ganrReplace.textContent = 'Драмма';

bgPromoReplace.style.cssText = 'background-image: url(img/bg.jpg)';

// movieDB.movies.sort();
// console.log(movieDB.movies)

// filmList.forEach((item, i) => {
//     console.log(item, i);
//     item.textContent = `${i + 1}. ${movieDB.movies[i]}`;
// });

moviList.innerHTML = "";
movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    moviList.innerHTML += `
        <li class="promo__interactive-item">${i + 1}. ${film}
            <div class="delete"></div>
        </li>
    `;
});
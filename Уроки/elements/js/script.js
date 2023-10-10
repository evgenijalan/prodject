'use strict';

// const box = document.getElementById('box');

// console.log(box);

// const btns = document.getElementsByTagName('button');

// console.log(btns);
// console.log(btns[2]);

// const btn = document.getElementsByTagName('button')[1];
// console.log(btn);

// const circles = document.getElementsByClassName('circle');
// console.log(circles);

// const hearts = document.querySelectorAll('.heart');
// console.log(hearts);

// hearts.forEach(item => {
//     console.log(item);
// });

// const oneHeart = document.querySelector('.heart');
// console.log(oneHeart);
//-------------------------------------------------------------------------
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
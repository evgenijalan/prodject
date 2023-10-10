'use strict';

const box = document.getElementById('box'),
      button = document.querySelectorAll('button'),
      btn = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.getElementsByClassName('heart'),
      wrapper = document.getElementsByClassName('wrapper');

// box.style.width = '200px';
box.style.cssText = 'background-color: silver; width: 200px';
box.innerHTML = '<p id="textP">Hello</p>';
document.getElementById('textP').style.cssText = 'color: red';
const arr = ['ag8', 'ag10', '7mx', '18x12', 'almax'];

button.forEach((index, i) => {
    index.textContent = `${i + 1}. ${arr[i]} `
});

btn[1].style.backgroundColor = 'orange';
// console.log(circles);
let y = 1;
for(let o of circles){
    o.innerHTML = `<h2>${y}</h2>`;
    y ++;
}

const divv = document.createElement('div');
divv.classList.add('black');
wrapper[0].append(divv);

hearts[2].remove();
hearts[0].replaceWith(circles[0]);

divv.insertAdjacentHTML('beforeend', '<h2> <font color="red">Hello</font></h2>');

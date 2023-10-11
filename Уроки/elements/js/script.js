'use strict';
/*
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
*/

const box = document.getElementById('box'),
      buttons = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.getElementsByClassName('heart'),
      wrapper = document.querySelector('.wrapper'),
      btns = document.querySelectorAll('button');

//box.style.borderRadius = '30px'; 
box.style.cssText = 'border-radius: 50% 20%/ 10% 40%; background-color: green';
box.innerHTML = `<h2><font color= "white" class="text">Hello</font></h2>`;     
document.querySelector('.text').style.cssText = 'position: absolute; margin-left: 6%; margin-top: 6%';

const arr = ['aus8', 'aus10', '12x18', '18t', 'almax'];

btns.forEach((item, i) => {
    item.textContent = `${i + 1}. ${arr[i]}`;
});

btns[0].style.backgroundColor = 'orange';
circles[0].remove();
circles[1].replaceWith(hearts[1]);

const div = document.createElement('div');
div.classList.add('black');
wrapper.append(div);

div.innerHTML = '<h2>Hello</h2>';

const obj = {
    one: 1,
    too: 2,
    free: 3,
};

const{one, too, free} = obj;

console.log(typeof(one));


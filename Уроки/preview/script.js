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
/*
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
*/
btns.forEach((item) => {
    item.addEventListener('click', (e) => {
        console.log(e.target);
    });
});
"use strict";

//function деструктуризация ========================
//--------------------------------------------------
/*


function calcValue(a, b){
    return [
        a + b,
        a - b,
        a * b,
        a / b,
    ]
}

const [sum,, mult] = calcValue( 2, 5);
console.log(sum, mult);
//----------------------------------------------

const personal = {
    name: 'Max',
    age: 20,
    adress: {
        country: 'Russian',
        city: 'Moscow',
    },
};

//const {name} = personal;
//console.log(name);

const {name: firstName, age, car = 'Машины нет', adress: {city}} = personal;
console.log(firstName,age, car, city);

//-------------------------------------------------

const auto = ['tesla', 2006, 'green', 20];
const [name, year, ...sw] = auto;
console.log(sw)
console.log( name, year, sw);

const [color, age, count = 10] = sw;
console.log(color, age, count);


//-------------------------------------------------

function conveerRubles(rubles){
    const complete = {
        eur: rubles * 80,
        usd: rubles * 70,
        gbr: rubles * 100,
    };

    return complete;
}
const {eur, usd} = conveerRubles(5000);
console.log(eur, usd);

//const rrr = conveerRubles(1000);
//console.log(rrr);
*/
//-------------------------------------------------

function getTotal({ total = 100, shipment = 0.1} = {}){
    return total + total * shipment;
}
const total = getTotal({total: 1000, shipment : 0.2});
console.log(total);
const total1 = getTotal();
console.log(total1);
const numberHours = document.querySelector('.number_hours');
const barSecond = document.querySelector('.bar-seconds');

const numberElement = [];
const barElement = [];

for(let i = 1; i <= 12; i++){
    numberElement.push(`<span style ="--index:${i};"><p>${i}</p></span>`);
}

numberHours.insertAdjacentHTML("afterbegin" , numberElement.join(""));
console.log(numberElement);


for(let i = 1; i <= 60; i++){
    barElement.push(`<span style ="--index:${i};"><p></p></span>`);
}

barSecond.insertAdjacentHTML("afterbegin" , barElement.join(""));

const handHour = document.querySelector('.hand.Hour');
const handMinute = document.querySelector('.hand.minute');
const handSecond = document.querySelector('.hand.second');

function get_current_time(){
    let date = new Date();
    let currentHour = date.getHours();
    let currentMinute = date.getMinutes();
    let currentSecond = date.getSeconds();

    handHour.style.transform = `rotate(${currentHour * 30 + currentMinute / 2}deg)`;
    handMinute.style.transform = `rotate(${currentMinute * 6}deg)`;
    handSecond.style.transform = `rotate(${currentSecond * 6}deg)`;
}

get_current_time();

setInterval(get_current_time, 1000);

let digitaldate = new Date();
const digitalHours = document.querySelector('.digital-hour span');
const digitalmin = document.querySelector('.digital-minute span');
const digitalsec = document.querySelector('.digital-second span');


function digitalclock(){
    let digitaldate = new Date();
    digitalHours.innerHTML = digitaldate.getHours();
    digitalmin.innerHTML = digitaldate.getMinutes();
    digitalsec.innerHTML = digitaldate.getSeconds();
}

digitalclock();

setInterval(digitalclock, 1000);

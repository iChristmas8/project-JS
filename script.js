'use strict';
let title = "project-JS";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 20;
let rollback = 80;
let fullPrice = 100;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log(`Стоимость верстки экранов ${screenPrice} рублей, Стоимость разработки сайта ${fullPrice} рублей`);
console.log(screens.toLowerCase().split(", "));
console.log(fullPrice * (rollback/100));


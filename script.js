'use strict';
let title = prompt("Как называется Ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать? (пример: 'Простые, Сложные, Интерактивные')");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let rollback = 80;
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");


let fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log(fullPrice);

let servicePercentPrice = Math.ceil(fullPrice - 8000.15);
console.log(servicePercentPrice);


if(fullPrice >= 30000) {
    console.log("Даем скидку в 10%");
} else if (fullPrice >= 15000 && fullPrice < 30000) {
    console.log("Даем скидку в 5%");
} else if (fullPrice < 15000 && fullPrice >= 0) {
    console.log("Скидка не предусмотрена");
} else if (fullPrice < 0) {
    console.log("Что то пошло не так");
}

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log(`Стоимость верстки экранов ${screenPrice} рублей, Стоимость разработки сайта ${fullPrice} рублей`);
console.log(screens.toLowerCase().split(", "));
console.log(fullPrice * (rollback/100));
'use strict';
<<<<<<< HEAD
let title = prompt("Как называется Ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать? (пример: 'Простые, Сложные, Интерактивные')");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let rollback = 10;
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");


let fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log(fullPrice);

let servicePercentPrice = Math.ceil(fullPrice - (fullPrice*(rollback/100)));
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
=======
let title = prompt("Как называется Ваш проект?", "Калькулятор верстки");
let screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
let screenPrice = +prompt("Сколько будет стоить данная работа?", "5000");
let rollback = 10;
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?", "Слайдер");
let servicePrice1 = +prompt("Сколько это будет стоить?", "1000");
let service2 = prompt("Какой дополнительный тип услуги нужен?", "Анимация");
let servicePrice2 = +prompt("Сколько это будет стоить?", "500");
let allServicePrices;
let fullPrice;
let servicePercentPrice;
>>>>>>> lesson04



let showTypeOf = function(variable) {
    console.log(variable, typeof variable);
};

let getRollbackMessage = function(price) {
    if(price >= 30000) {
        return "Даем скидку в 10%";
    } else if (price >= 15000 && price < 30000) {
        return "Даем скидку в 5%";
    } else if (price < 15000 && price >= 0) {
        return  "Скидка не предусмотрена";
    } else if (price < 0) {
        return "Что то пошло не так";
    }
};

let getAllServicePrices = function() {
    return servicePrice1 + servicePrice2;         //Function Expression (Функциональное Выражение)
};

function getFullPrice() {
    return screenPrice + allServicePrices;        //Function Declaration (Объявление Функции)
}

let getTitle = function() {
    title = title.trim().toLowerCase();
    return title = title[0].toUpperCase() + title.slice(1);
};

function getServicePercentPrices(rollback) {
    return fullPrice - (fullPrice * (rollback / 100));
}


allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices(rollback);
getTitle();
showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);



console.log(getRollbackMessage(fullPrice));
console.log(screens.toLowerCase().split(", "));
<<<<<<< HEAD
console.log(fullPrice * (rollback/100));
=======
console.log("Стоимость разработки сайта " + servicePercentPrice + " рублей");
>>>>>>> lesson04

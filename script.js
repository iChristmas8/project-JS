'use strict';
let title = prompt("Как называется Ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать? (пример: 'Простые, Сложные, Интерактивные')");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let rollback = 15;
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let allServicePrices;
let fullPrice;
let servicePercentPrice;



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

function getTitle(string) {
  return string.trim().charAt(0).toUpperCase() + string.slice(1);
}

function getServicePercentPrices(rollback) {
    return fullPrice - (fullPrice * (rollback / 100));
}


allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
title = getTitle(title);
servicePercentPrice = getServicePercentPrices(rollback);
showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);



console.log(getRollbackMessage(fullPrice));
console.log(screens.toLowerCase().split(", "));
console.log("Стоимость разработки сайта " + servicePercentPrice + " рублей");

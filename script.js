'use strict';

<<<<<<< HEAD
let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 10;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;

const isNumber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function() {
    title = prompt("Как называется Ваш проект?", "Калькулятор верстки");
    screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");

    do {
        screenPrice = +prompt("Сколько будет стоить данная работа?");
    } while (!isNumber(screenPrice));
    
    adaptive = confirm("Нужен ли адаптив на сайте?");
};

let getAllServicePrices = function() {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
        let price = 0;

        if (i === 0) {
            service1 = prompt("Какой дополнительный тип услуги нужен?", "Слайдер");
        } else if (i === 1) {
            service2 = prompt("Какой дополнительный тип услуги нужен?", "Анимация");
        }

    do {
        price = +prompt("Сколько будет стоить данная работа?");
    } while (!isNumber(price));
        
        sum += +price;
    }

    return sum;         
};

function getFullPrice() {
    return screenPrice + allServicePrices;        
}
=======
const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    service1: '',
    service2: '',
    asking: function() {
        appData.title = prompt("Как называется Ваш проект?", "Калькулятор верстки");
        appData.screens = prompt("Какие типы экранов нужно разработать?", "Простые,Сложные,Интерактивные");

        do {
        appData.screenPrice = +prompt("Сколько будет стоить данная работа?");
        } while (!appData.isNumber(appData.screenPrice));
    
        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },
    isNumber: function(num) {
        return !isNaN(parseFloat(num) && isFinite(num));
    },

    getAllServicePrices: function() {
        let sum = 0;

        for (let i = 0; i < 2; i++) {
            let price = 0;

            if (i === 0) {
                appData.service1 = prompt("Какой дополнительный тип услуги нужен?", "Слайдер");
            } else if (i === 1) {
                appData.service2 = prompt("Какой дополнительный тип услуги нужен?", "Анимация");
            }

            do {
                price = +prompt("Сколько будет стоить данная работа?");
            } while (!appData.isNumber(price));
        
        sum += +price;
    }
    return sum;         
    },

    getFullPrice: function() {
    return appData.screenPrice + appData.allServicePrices;        
    },
>>>>>>> lesson07

    getTitle: function() {
    appData.title = appData.title.trim().toLowerCase();
    return appData.title = appData.title[0].toUpperCase() + appData.title.slice(1);
    },

<<<<<<< HEAD
let getTitle = function() {
    title = title.trim().toLowerCase();
    return title = title[0].toUpperCase() + title.slice(1);
};

function getServicePercentPrices(rollback) {
    return fullPrice - (fullPrice * (rollback / 100));
}

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

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices(rollback);
getTitle();
showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log("title", typeof title, title);
console.log("screens", typeof screens, screens);
console.log("screenPrice", typeof screenPrice, screenPrice);
console.log("adaptive", typeof adaptive, adaptive);
console.log("service1", typeof service1, service1);
console.log("service2", typeof service2, service2);
console.log("allServicePrices", typeof allServicePrices, allServicePrices);
console.log("fullPrice", typeof fullPrice, fullPrice);
console.log("servicePercentPrice", typeof servicePercentPrice, servicePercentPrice);
console.log("rollback", typeof rollback, rollback);

console.log("allServicePrices", allServicePrices);
console.log(getRollbackMessage(fullPrice));
console.log(screens.toLowerCase().split(", "));
console.log("Стоимость разработки сайта " + servicePercentPrice + " рублей");
=======
    getServicePercentPrices: function() {
    return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },

    getRollbackMessage: function(price) {
        if(price >= 30000) {
            return "Даем скидку в 10%";
        } else if (price >= 15000 && price < 30000) {
            return "Даем скидку в 5%";
        } else if (price < 15000 && price >= 0) {
            return  "Скидка не предусмотрена";
        } else if (price < 0) {
            return "Что то пошло не так";
        }
    },

    start: function () {
        appData.asking();
        appData.allServicePrices = appData.getAllServicePrices();
        appData.fullPrice = appData.getFullPrice();
        appData.servicePercentPrice = appData.getServicePercentPrices();
        appData.title = appData.getTitle();
        appData.logger();
    },
    logger: function () {
        for (let prop in appData) {
            console.log(prop);
        }
    }
};

appData.start();
>>>>>>> lesson07

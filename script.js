'use strict';

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: {},
    start: function () {
        appData.asking();
        appData.appPrices();
        appData.getFullPrice();
        appData.getServicePercentPrices();
        appData.getTitle();

        appData.logger();
    },
    isNumber: function(num) {
        return !isNaN(parseFloat(num) && isFinite(num));
    },
    asking: function() {

        do {
            appData.title = prompt("Как называется Ваш проект?", "Калькулятор верстки");
        } while (typeof(appData.title) != 'string' || appData.isNumber(appData.title));
        
        for (let i = 0; i < 2; i++) {
            let name;
            do {
                name = prompt("Какие типы экранов нужно разработать?");
                } while (typeof(name) != 'string' || appData.isNumber(name));
            let price = 0;
        
            do {
                price = +prompt("Сколько будет стоить данная работа?");
                } while (!appData.isNumber(price));

                appData.screens.push({id: i, name: name, price: price});

                console.log('Как называется ваш проект?', typeof appData.title);
                console.log('Какие типы экранов нужно разработать?', typeof name);
                console.log('Сколько будет стоить данная работа?', typeof price);
        }

        for (let i = 0; i < 2; i++) {
            let name;
            let price = 0;

            do {
                name = prompt("Какой дополнительный тип услуги нужен?");
            } while (typeof(name) != 'string' || appData.isNumber(name));

            do {
                price = +prompt("Сколько это будет стоить?");
            } while (!appData.isNumber(price));
        
            appData.services[name] = +price;

            console.log('Какой дополнительный тип услуги нужен?', typeof name);
            console.log('Сколько это будет стоить?', typeof price);
    }
    
        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },

    appPrices: function() {
        for(let screen of appData.screens) {
            appData.screenPrice += +screen.price;
        }

        for(let key in appData.services) {
            appData.allServicePrices += appData.services[key];
        }
    },

    getFullPrice: function() {
     appData.fullPrice = appData.screenPrice + appData.allServicePrices;        
    },

    getTitle: function() {
    appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substring(1).toLowerCase();
    },

    getServicePercentPrices: function() {
     appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
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

    logger: function () {
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.screens);
    }
};

appData.start();
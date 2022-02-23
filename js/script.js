'use strict';

const title = document.getElementsByTagName('h1')[0];

const startBtn = document.getElementsByClassName('handler_btn')[0];
const resetBtn = document.getElementsByClassName('handler_btn')[1];

const buttonPlus = document.querySelector('.screen-btn');

const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');

const rollbackInput = document.querySelector('.rollback input[type=range]');
const rollbackRangeValue = document.querySelector('.rollback .range-value');

const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const totalFullCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];

let screens  = document.querySelectorAll ('.screen');

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicesPercent: {},
    servicesNumber: {},
    countSum: 0,

    init: function() {
        appData.addTitle();
        startBtn.addEventListener('click', appData.allCountScreens);
        buttonPlus.addEventListener('click', appData.addScreenBlock);
        rollbackInput.addEventListener('input', appData.rollBackResult);
    },

    addTitle: function() {
        document.title = title.textContent;
    },

    rollBackResult: function() {
     rollbackRangeValue.textContent = rollbackInput.value + '%';
     totalCountRollback.value = Math.ceil(
      appData.fullPrice - appData.fullPrice * (rollbackInput.value / 100)
    );
   },

    allCountScreens: function() {
        if(appData.addScreens() !== true) {
            alert('Не выбран тип или количество экранов')
        } else appData.start();
    },

    start: function () {
        appData.addScreens();
        appData.addServices();
        appData.addPrices();
        appData.logger();
        appData.showResult();
    },

    showResult: function() {
      total.value = appData.screenPrice;
      totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber;
      totalFullCount.value = appData.fullPrice;
      totalCountRollback.value = appData.servicePercentPrice;
      totalCount.value = appData.countSum;
    },
    
    addScreens: function() {
        appData.screens.length = 0;
        let screens  = document.querySelectorAll ('.screen');

        screens.forEach(function(screen, index) {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const selectName = select.options[select.selectedIndex].textContent;

            appData.screens.push({
                id: index, 
                name: selectName,
                count: +input.value, 
                price: +select.value * +input.value
            });
        });

        if (appData.screens.find(item => item.price === 0)) {
            return false;
        } else {
            return true;
        }

    },
    
    addServices: function() {
        otherItemsPercent.forEach(function(item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if(check.checked) {
                appData.servicesPercent[label.textContent] = +input.value;
            }
        });

        otherItemsNumber.forEach(function(item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if(check.checked) {
                appData.servicesNumber[label.textContent] = +input.value;
            }
        });
    },

    addScreenBlock: function() {
        const lastIndex = screens.length - 1;
        const cloneScreen = screens[lastIndex].cloneNode(true);
    
        appData.addScreenEvents(cloneScreen);
        screens[lastIndex].after(cloneScreen);
        screens = document.querySelectorAll('.screen');
    },

    addScreenEvents: function (screen) {
        const select = screen.querySelector('select');
        const input = screen.querySelector('input');
    
        select.addEventListener('change', () => {
          select.style.borderColor = '';
          select.style.color = '';
        });
    
        input.addEventListener('input', () => {
          input.style.borderColor = '';
          input.style.color = '';
        });
    },


    addPrices: function () {
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price;
    }

    for (let key in appData.servicesNumber) {
      appData.servicePricesNumber += appData.servicesNumber[key];
    }

    for (let key in appData.servicesPercent) {
      appData.servicePricesPercent +=
        appData.screenPrice * (appData.servicesPercent[key] / 100);
    }

    appData.fullPrice =
      +appData.screenPrice +
      appData.servicePricesPercent +
      appData.servicePricesNumber;

    appData.rollback = +rollbackInput.value;

    appData.servicePercentPrice = Math.ceil(
      appData.fullPrice - appData.fullPrice * (rollbackInput.value / 100)
    );

    for (let screen of appData.screens) {
      appData.countSum += +screen.count;
    }
  },

    logger: function () {
        console.log(appData.screens);
    }
};

appData.init();
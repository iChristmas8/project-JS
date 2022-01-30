let title = "project-JS";
let screens = ["Простые, Сложные, Интерактивные"];
let screenPrice = 20;
let rollback = 80;
let fullPrice = 100;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log(`${screenPrice} рублей, ${fullPrice} рублей`);
console.log(screens[0].toLowerCase());
console.log(screens);
console.log(fullPrice * (rollback/100));
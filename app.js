'use strict'

let car = {
    model: 'bmw',
    year: 2010,
    color: 'black',
    signal: function (){
        return 'fa! fa!'
    }
}

car.color = 'red'
car.type = 'auto'
car.signal()
console.log(car.signal())


// В цій задачці не вийшло зробити з такою структурою, як в умові, щоб total () був методом, і результат коректно відображався (все рахувало правильно, але разом з результатом чомусь відображається код). Все вийшло в тому варіанті який закоментований, підкажіть будь ласка, як це можна було вирішити, щоб total () був методом, і в консолі був тільки результат додавання?
let sum = 0;
let salaries = {
    frontend: 12000,
    backend: 10000,
    designer: 8000,
    dayPay () {
        alert('text')
    },
    total (sum) {
        for (const key in salaries) {
            sum += salaries[key];
        }
    }
}
salaries.total(sum)
console.log(salaries.total())

// let sum = 0;
// function total () {
//     for (const key in salaries) {
//         sum += salaries[key];
//     }
// }
// total () 
// console.log(sum)


function Laptop (brand, system, coast) {
    this.brand = brand;
    this.system = system;
    this.coast = coast;
}

let dell = new Laptop('Dell', 'windows', 800)
let apple = new Laptop('Apple', 'MAC OC', 1700)
console.log(dell.coast)

let oneNum = 20;
let twoNum = 21;
function numbers (a, b) {
    if (a%2 === 0 && b%2 === 0) {
        return a*b
    } else if (a%2 === 1 && b%2 === 1) {
        return a+b
    } else if (a%2 === 0 && b%2 !==0){
        return b
    } else {
        return a
    }
}

numbers (oneNum, twoNum)

// Вибачте, але тут зовсім не розумію як зробити, щоб введена задача в промпт textUser відобразилась як значення цього ключа, і як перевіряти, чи є вже цей користувач, щоб змінити статус
let nameUser = prompt('Enter name', 'Your name');
let textUser = prompt('Enter text', 'Your text');
const tasks = {
    Anna: {
      status: 'new',
      text: 'Create checkout page'
    }, 
    Ihor: {
      status: 'done',
      text: 'Add styles to header'
    },
    [nameUser]: {
        status: 'new',
        [textUser]:
    }
}
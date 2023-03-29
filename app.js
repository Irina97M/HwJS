'use strict'


// 1
// Підозрюю, що не правильно зрозуміла умову. В задачі написано, що 'name' і 'age' можна тільки читати, і не можна змінювати, тобто видаляти можна виходить? про 'id' сказано,
// що не можна видалити, і змінити, тобто треба поставити тільки writable: true?
let user = {};

Object.defineProperties(user, {
    'name': {
        value: 'Mike',
        writable: true,
        configurable: true
    },
    'age': {
        value: 25,
        writable: true,
    }
})
Object.defineProperty(user, 'id', {
    value: 'MK_18',
    writable: true
})

console.log(Object.getOwnPropertyDescriptor(user, 'name'));
console.log(Object.getOwnPropertyDescriptor(user, 'age'));


// // 2
let dataBase = {
    dbName: 'user',
    dbType: 'MySQL'
}
let configurableDB = {
    token: '123',
    password: '567',
    user: 'admin'
}

Object.freeze(dataBase);
Object.seal(configurableDB);


// 3  Тут пробувала багато варіантів, але чомусь все одно повертає undefined, не справилась
let salaries = {
    frontend: 2000,
    backend: 1500,
    design: 1000,
    set addSalaries(value) {
        let sum = Object.entries(value);
        this._addSalaries = sum.map(function(arr) {
            return `${arr[0]}: ${arr[1]}`;
        })
}}


salaries.addSalaries
console.log(salaries._addSalaries)

// 4
let user = {
    name: 'Mike',
    surname: 'Davis',
    age: 25,
};
Object.defineProperty(user, 'userInfo', {
    get() {
        let str = '';
        for (const key in this) {
        str += `${key}: ${this[key]}, `;
        }
        return str.slice(0, -2); 
    },
    enumerable: false
});

console.log(user.userInfo);
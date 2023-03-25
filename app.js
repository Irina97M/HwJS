'use strict'

// 1
// Підозрюю, що не правильно зрозуміла умову. В задачі написано, що 'name' і 'age' можна тільки читати, і не можна змінювати, тобто видаляти можна виходить? про 'id' сказано,
// що не можна видалити, і змінити, тобто треба поставити тільки writable: true?
// let user = {};

// Object.defineProperties(user, {
//     'name': {
//         value: 'Mike',
//         writable: true,
//         configurable: true
//     },
//     'age': {
//         value: 25,
//         writable: true,
//     }
// })
// Object.defineProperty(user, 'id', {
//     value: 'MK_18',
//     writable: true
// })

// console.log(Object.getOwnPropertyDescriptor(user, 'name'));
// console.log(Object.getOwnPropertyDescriptor(user, 'age'));


// // 2
// let dataBase = {
//     dbName: 'user',
//     dbType: 'MySQL'
// }
// let configurableDB = {
//     token: '123',
//     password: '567',
//     user: 'admin'
// }

// Object.freeze(dataBase);
// Object.seal(configurableDB);


// // 3
// let salaries = {
//     frontend: 2000,
//     backend: 1500,
//     design: 1000,
//     set addSalaries(value) {
//         let newArr = [];
//         for (const key in salaries) {
//             console.log(`${key} : ${salaries[key]}`)
//             }
//             return addSalaries
//         }
// }



// Object.defineProperty(salaries, 'sum', {
//     get (){
//         let sum = 0;
//         for(const salary in this) {
//             sum += this[salary];
//         }
//         console.log(sum);
//     },
//     enumerable: false
// })


// console.log(salaries.addSalaries)


let user = {
    name: 'Mike',
    surname: 'Davis',
    age: 25,
    get userInfo() {
        let str = '';
        for (const key in this) {
        str += `${key}: ${this[key]}, `;
        }
      return str.slice(0, -2); // видалення останніх двох символів
    }
};

console.log(user.userInfo);


// for ( const [key, value] of Object.entries(user)) {
//     return user.join()
// enumerable: false
// }
// Object.defineProperty(user, 'userInfo', {
//     )


//     get userInfo(){
//         let sum = Object.entries(user);
//         for ( const [key, value] of Object.entries(user)) {
//                 return sum.join()
//         }
        
//         
// }

// for ( const [key, value] of Object.entries(user)) {
//     return `${key}: ${value}`
// }

// let sum;
//         for ( const [key, value] of Object.entries(user)) {
//             sum = `${key}: ${value}`;
//             return sum



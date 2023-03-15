'use strict'

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function addition(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             sum += addition(arr[i]);
//         } else {
//             sum += arr[i];
//         }
//     }
//     return sum;
// }

// console.log(addition(arr));

// Вибачте, здаю не всі задачі, просто не можу деякі вирішити, а треба хоч якось наздогнати


// const employees = {
//     development: {
//         backend: [{name: 'Mike', salary: 2000}, {name: 'Nikola', salary: 2500}],
//         frontend: [{name: 'Artem', salary: 3000}, {name: 'Alex', salary: 2700}],
//     },
//     sales: {
//         marketing: {
//             internet_marketers: [{name: 'Nina', salary: 1000}, {name: 'Olena', salary: 1300}],
//             promotion: [{name: 'Oleg', salary: 1400}, {name: 'Masha', salary: 1700}],
//         },
//         sellers:  [{name: 'Max', salary: 900}, {name: 'Donald', salary: 700}, {name: 'Joe', salary: 1100}]
//     },
//     designer: [{name: 'Kate', salary: 1800}]
// }

// function takeSumSallary() {
//     let sum = 0;
//     return function sumSallary(obj){
//         for(let key in obj){
//             if (Array.isArray(obj[key])){
//                 obj[key].forEach(employee => sum += employee.salary);
//             } else {
//                 sumSallary(obj[key]);
//             }
//         }
//         return sum;
//     }
// }

// const totalSalary = takeSumSallary()(employees);
// console.log(totalSalary);

let arr1 = [2, 15, 7, 3];
let arr2 = [9, 3, 17, 12, 4, 8];
let arr3 = [6, 11, 16, 15, 11];
let count = [...arr1, ...arr2, ...arr3];
function numArr() {
    return Math.max.apply(null, count);
}
// let numbers = numArr();
console.log(numArr(count))
// console.log(count);

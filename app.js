'use strict'
// 1
// let user = ['Mike', 'Nicola', 'Tom'];
// // console.log(user[2]);
// // user.splice(1, 1, 'Alex');
// // user.length = user.length - 2;
// console.log(user.length)



// 2
// Довго розбиралась, але до кінця не зрозуміла що саме роблять ці параметри функції, і ось цей 0 після тіла функції
// І чи можна було зробити порівняння всередині reduce(), не звертаючись до if?
// let a = [5, 3, -4, 25, 32, -16, 6];
// let b = [21, -30, 9, 5, 12, -19, 5, 25];
// let resultA = a.reduce(function(sum, elem) {
// 	return sum + elem;
// }, 0);
// let resultB = b.reduce(function(sum, elem) {
// 	return sum + elem;
// }, 0);
// if(resultA > resultB) {
//     console.log('a > b')
// } else if (resultA < resultB) {
//     console.log('a < b')
// } else {
//     console.log('a == b')
// }


// 3
// let phrase = 'I am learning JavaScript right now';
// phrase = phrase.split(' ');
// console.log(phrase);


// 4   Вибачте, не осилила цю задачу взагалі, chatGPT мені вирішив її, але навіть по готовому рішенню нічого не зрозуміло. Важко з forEach, і як з ним працювати надалі:(
// Ще питання не зовсім по темі, але, як гадаєте, чи є шанси зрозуміти майбутні теми без цих, чи треба добити ці теми, щоб далі вчити щось?
// let a = [5, 3, 8, 5, 3, 2, 1, 2]
// let b =[];
// a.

//5 
let users = [{id: 1, age: 17},
            {id: 2, age: 18},
            {id: 3, age: 19},
            {id: 4, age: 21},
            {id: 5, age: 17},
            {id: 6, age: 20},
            {id: 7, age: 25},];

console.log(users.filter(user => user.age > 18 && user.age < 21))

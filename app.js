'use strict'

// class User {
//     #name;
//     constructor(name, login, age, password) {
//         this.#name = name;
//         this.login = login;
//         this.age = age;
//         this.password = password;
//     }
//     getName(isAdmin){
//         if(isAdmin){
//             return this.#name || this.login
//         } else {
//             return 'Permission denied'
//         }
//     }
//     changeName(){
//         if(this.password == 123) {
//             this.#name = 'Bill'
//             return 'Name Changed from Mike to Bill'
//         } else{
//             return 'Permission denied'
//         }
//     }
// }


// let user1 = new User ('Mike', 'MK_18', 18, 123);
// let user2 = new User ('', 'NRG', 22, 111);

// console.log(user1.getName(true)) // Mike
// console.log(user2.getName(true)) // NRG
// console.log(user2.getName(false)) // Permission denied
// console.log(user1.changeName()) // Name Changed from Mike to Bill
// console.log(user2.changeName()) // Permission denied



// Тут не вийшло зробити, щоб зірочки були безперервні як в задачі, все одно розділяються '-'. І ще питання є, чи можна звернутися до декількох елементів масива одночасно замість
// окремого запису num[1] = '***'; num[2] = '**'; спробувала це зробити так num[1, 2], але воно працює лише з першим індексом
                
class User {
    #phone;
    constructor(name, phone) {
        this.name = name;
        this.#phone = phone;
    }
    getPhone(isAdmin){
        if(isAdmin){
            return this.#phone
        } else {
            let num = this.#phone.split('-'); 
            for (let index = 0; index < num.length; index++) {
                num[1] = '***';
                num[2] = '**';
            }
            num = num.join('-');
            return num;
        }
    }
}

let user1 = new User ('Mike', '067-888-88-99');
let user2 = new User ('Tom', '098-828-00-99');

console.log(user1.getPhone(true))

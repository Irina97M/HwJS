'use strict'


// 1
let car = {
    type: 'electric',
    wheels: 4,
}

let sportCar = {
    doors: 2,
}

Object.setPrototypeOf(sportCar, car)

let passengerCar = Object.create(car)
passengerCar.doors = 4;

let toyCar = Object.create(sportCar)
toyCar.type = 'toy';
console.log(toyCar)

// 2
let employees = {
    pay (month, sum) {
        this.wallet[month] = sum;
    }
}


let frontendDeveloper = {
    name: 'Mike',
    wallet: {},
}

Object.setPrototypeOf(frontendDeveloper, employees);
frontendDeveloper.pay('june', 5500);


let backendDeveloper = {
    name: 'Bob',
    wallet: {},
}

Object.setPrototypeOf(backendDeveloper, employees);
backendDeveloper.pay('june', 1500);


console.log(backendDeveloper.wallet.june)
console.log(frontendDeveloper.wallet.june)








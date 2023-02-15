'use strict'

let maxNumA = +prompt('Enter number A', 1)
let maxNumB = +prompt('Enter number B', 2)
function maxNumber(a, b) {
    if (a>b) {
        alert(a);
    } else if (a<b) {
        alert(b);
    } else if (a === b) {
        alert('a=b');
    }
}
maxNumber(maxNumA, maxNumB)

// В цих задачах не розумію що саме треба використовувати, alert або return. І ще не зрозумілі умови в кінці виразів типу 'використовуйте alert(three(+number,+count))', роблю як виходить, сподіваюсь це не буде помилкою
let numberPlusMinus = +prompt('Enter the number', 1)
function plusMinus(a){
    if (a > 0) {
        let result = -Math.abs(a)
        alert(result)
    } else if (a < 0) {
        let result = Math.abs(a)
        alert(result)
    }
}
plusMinus(numberPlusMinus)

let number = +prompt('Enter the number')
let count = 2
function multiplication(numeric, multiplier) {
    let result = number + 3 * count
    alert(result)
}

multiplication(number, count)


// Тут на жаль дуже довго розбиралась, але так і не зрозуміла як правильно написати умову в тіло функції
function getMetric (metric, km, m, cm) {
    if (metric === 'm') {
        return m(km)
    } else if (metric === 'cm') {
        return cm(km)
    } else {
        return 'Error. Enter correct values m or cm'
    }
}

function KmToM (km) {
    return(km *= 1000) 
}

function KmToCm (km) {
    return(km *= 100000) 
}

getMetric('m', 2, KmToM, KmToCm)
console.log(getMetric (metric, km, m, cm))
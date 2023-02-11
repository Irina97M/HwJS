

let seleryOne = prompt('Enter first month salary', '1')
let seleryTwo = prompt('Enter secnd month salary', '2')
alert(`Your salary for 2 month is: ${+seleryOne + +seleryTwo}`)
let totalSelery = +seleryOne + +seleryTwo
alert(`You have extra bonus! Your total salary was: ${totalSelery} It's increase for 1$ and now it is: ${++totalSelery}`)
// Ви в лекції казали, що можна обійтись без if else, але я так і не зрозуміла яким чином
if (++totalSelery < 2000) {
    alert(`I'm out`)
} else {
    alert(`I'm ready to work`)
}
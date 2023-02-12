'use strict'

let userAge = prompt('How old are you?', 'Age')
if (userAge <= 17) {
    alert(`Do you study at school?`)
} else if (userAge > 17 && userAge < 25) {
    alert(`Do you study at university?`)
} else if (userAge >= 25 && userAge < 60) {
    alert(`Do you have a job?`)
} else {
    alert(`What are you doing?`)
}

let valueDisplay = prompt('Enter value display', 0)
switch (valueDisplay) {
    case "block":
        alert("Set 'display: block'");
        break;
    case "flex":
        alert("Set 'display: flex'");
        break;
    case "grid":
        alert("Set 'display: grid'");
        break;
    case "inline":
        alert("Set 'display: inline'");
        break;
    case "none":
        alert("Set 'display: none'");
        break;
    default:
        alert("Set 'display: inline-block'");
        break;
}

// Знайшла підказки в чаті по цьому завданню, дуже старалась розібратись, але не розумію як зробити через do{} while(), а через просто while() воно не повторюється
let numbers  = prompt('Please enter the number', 1)
while (+numbers) {
    alert(`${+numbers} by 12 equals ${+numbers * 12}`)
    continue;
}
prompt('Your number is incorect, pleace enter corect number', 1)


for (let i = 2; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}
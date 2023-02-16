//1
function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}

//2
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}


//3
function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
    alert(`Not found, use a positive numbers`);
} else {
    alert(pow(x, n));
}


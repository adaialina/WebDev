//1
let a = +prompt("Enter first number:", "");
let b = +prompt("Enter second number:", "");

alert( a + b );


//2
function readNumber() {
    let num;

    do {
        num = prompt("Enter a number:", 0);
    } while ( !isFinite(num) );

    if (num === null || num === '') return null;
    return +num;
}

alert(`Read: ${readNumber()}`);


//3
let i = 0;
while (i < 11) {
    i += 0.2;
    if (i > 9.8 && i < 10.2) alert(i);
}


//4
function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

alert( randomInteger(1, 3) );


//1
for(let i = 2; i <=10; i++){
    if(i % 2 == 0){
        alert(i);
    }
}


//2
let i = 0;
while(i < 3){
    alert(`number ${i}!`);
    i++;
}


//3
let number;

do{
    number = prompt('Enter a number greater that 100:', 0);
} while(number <=100 && number)


//4
let n = 10;

notPrimeNext:
    for(let i = 2; i <= 10; i++) {
        for (let j = 2; j < i; j++){
            continue notPrimeNext;
        }
        alert(i);
    }

//1
let value = prompt('Enter a number', 0);
if(value > 0){
    alert(1);
}
else if(value < 0){
    alert(-1);
}
else{
    alert(0);
}

//2
let result = (a + b < 4) ? 'Below' : 'Over';

//3
let message = (login == 'Employee') ? 'Hello' :
    (login == 'Director') ? 'Greetings' :
        (login == '') ? 'No login' :
            '';
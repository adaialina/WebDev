//1
if(age >= 14 && age <= 90);

//2
if(!(age >= 14 && age <= 90));

//3
let username = prompt("Who's there?", "");

if(username === 'Admin') {
    let pass = prompt('Password?', '');

    if(pass === 'TheMaster'){
        alert('Welcome!');
    } else if(pass === '' || pass === null){
        alert('Canceled');
    } else{
        alert('Wrong password');
    }
}

else if(username === '' || username === null){
    alert('Canceled');
}
else{
    alert("I don't know you");
}

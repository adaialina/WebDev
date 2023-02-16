//1
function ucFirst(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
}

alert( ucFirst("john") );


//2
function checkSpam(str) {
    let strLower = str.toLowerCase();

    return strLower.includes('viagra') || strLower.includes('XXX');
}

alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );


//3
function truncate(str, maxlength) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength - 1) + '…' : str;
}


//4
function extractCurrencyValue(str) {
    return +str.slice(1);
}
// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}


function sayHello(input) {
    if (typeof input === 'string') {
        return `Hello, ${input}!`
    } else {
        return 'Hello, World!'
    }
}

function isFive(num) {
    return num === 5;
}

function isEven(num) {
    return parseFloat(num) % 2 == 0
}

function isVowel(letter) {
    if (typeof letter === 'string') {
        let letter1 = letter.toLowerCase();
        return letter1 === 'a' || letter1 === 'e' || letter1 === 'i' || letter1 === 'o' || letter1 === 'u';
    } else {
        return false;
    }
}

function add(num1, num2) {
    let sum = parseFloat(num1) + parseFloat(num2);
    if (sum != NaN) {
        return sum
    } else {
        return NaN
    }
}
var num1 = 2;

function sum() {
    var num2 = 3;

    return function() {
        return num1 + num2;
    }
}

const myFunc = sum();

console.dir(myFunc)

console.log(myFunc())

function bankAccount(initialBalance) {
    var balance = initialBalance;
    return function() { // the closure
        return balance;
    };
} 

var account = bankAccount(10000);
console.log(account());

console.log(balance); // error: balance cannot be accessed from the outside
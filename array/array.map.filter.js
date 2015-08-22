var test = [];

for (var i = 1; i < 10; i++) {
    test.push(i);
}

var test2 = test.map(function(num){
    return num *=2;
});
console.log(test2);

function isEven(num){
    return num % 2 === 0;
}

function isOdd(num){
    return num % 2 !== 0;
}

var evens = test.filter(isEven);
console.log(evens);
var odds = test.filter(isOdd);
console.log(odds);
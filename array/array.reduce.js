var test = [];

for (var i = 1; i < 10; i++) {
    test.push(i);
}

function add(sum, value){
    console.log(value);
    //return sum + value;
    //console.log('*'.repeat(value)); // es6
}

console.log(test.reduce(add));
console.log(test.reduceRight(add));

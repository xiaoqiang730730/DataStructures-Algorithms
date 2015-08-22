var test = [];

for (var i = 1; i < 10; i++) {
    test.push(i);
}

test.forEach(function(num){
    console.log('*'.repeat(num)); // es6
});
test.reduceRight(function(a, b){
    console.log('*'.repeat(b)); // es6
});

function isEven(num){
    return num % 2 === 0;
}

if(test.every(isEven)){
    console.log('all num are even');
}else{
    console.log('not all num are even');
}

if(test.some(isEven)){
    console.log('some num are even');
}else{
    console.log('not some num are even');
}
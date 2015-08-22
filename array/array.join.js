var test = [];

for (var i = 0; i < 10000000; i++) {
    test.push(i);
}

function join(){
    var data1 = new Date();
    console.log(data1.getTime());
    test.join();
    var data2 = new Date();
    console.log(data2.getTime() - data1.getTime());
}


function toString(){
    var data1 = new Date();
    console.log(data1.getTime());
    test.toString();
    var data2 = new Date();
    console.log(data2.getTime() - data1.getTime());
}

join();
toString();
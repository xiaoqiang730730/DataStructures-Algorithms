function Stack(){
    this.dataStore = [];
    this.top = 0;
    this.push = function(element){
        this.dataStore[this.top++] = element;
    };
    this.pop = function(){
        return this.dataStore[--this.top];
    };
    this.peek = function(){
        return this.dataStore[this.top -1];
    };
    this.length = function(){
        return this.top;
    };
    this.clear = function(){
        this.top = 0;
        this.dataStore = [];
    };
}

// 数值之间的装换
// 
function mulBase(num, base){
    var s = new Stack();
    do {
        console.log(num%base);
        s.push(num%base);
        num = Math.floor(num /= base);
    }while(num > 0);
    var converted = '';
    while(s.length() > 0){
        converted += s.pop();
    }
    return converted;
}

var newNum = mulBase(32,2);

console.log(newNum);

newNum = mulBase(125, 8);
console.log(newNum);
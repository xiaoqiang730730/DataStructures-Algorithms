function List(){
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
}

List.prototype = {
    clear: function(){
        this.dataStore = [];
        this.listSize = this.pos = 0;
    },
    find: function(element){
        for (var i = 0; i < this.dataStora.length; i++) {
            if(this.dataStora[i] == element){
                return i;
            }
        }
        return -1;
    },
    toString: function(){
        return this.dataStore;
    },
    insert: function(element, after){
        // 在after元素后面插入一个元素\
        var index = this.find(after);
        if(index > -1){
            this.dataStore.splice(index + 1, 0, element);
            this.listSize ++;
            return true;
        }
        return false;
    },
    append: function(element){
        // 给列表下一个位置增加一个新的元素
        this.dataStore[this.listSize ++ ] = element;
    },
    remove: function(element){
        var index = this.find(element);
        if(index > -1){
            this.dataStore.splice(index, 1);
            --this.listSize;
            return true;
        }
        return false;
    },
    front: function(){
        this.pos = 0;
    },
    end: function(){
        if(this.listSize){
            this.pos = this.listSize - 1;
        }else{
            this.pos = 0;
        }
    },
    prev: function(){
        if(this.pos){
            --this.pos;
        }
    },
    next: function(){
        if(this.pos < this.listSize -1){
            ++this.pos;
        }
    },
    currPos: function(){
        return this.pos;
    },
    moveTo: function(position){
        this.pos = position;
    },
    getElement: function(){
        return this.dataStore[this.pos];
    },
    length: function(){
        return this.listSize;
    },
    contains: function(element){
        if(this.find(element) > -1){
            return true;
        }else{
            return false;
        }
    }
};
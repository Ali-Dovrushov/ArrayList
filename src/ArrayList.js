function ArrayList() {
    this.array = [];
    this.size = 0;
}

ArrayList.prototype.myInit = function(array) {
    this.array = array;
    this.size = array.length;
}

ArrayList.prototype.mySize = function() {
    return this.size;
}

ArrayList.prototype.myPop = function() {
    const myPopDel = this.array[this.size - 1];
    this.array.length = this.array.length - 1;
    this.size--;
    return myPopDel;
}

ArrayList.prototype.myPush = function(pushNumber) {
    this.array[this.size] = pushNumber;
    return ++this.size;
}

ArrayList.prototype.myShift = function() {
    let shift = this.array[0];
    for(let i = 1; i < this.array.length; i++) {
        this.array[i - 1] = this.array[i]
    }
    this.array.length -= 1;
    this.size--;
    return shift;
}

ArrayList.prototype.myUnShift = function(shiftNumber) {
    for(let i = this.size; i >= 0; i--) {
        this.array[i] = this.array[i - 1];
    }
    this.array[0] = shiftNumber;
    return this.size++;
}

ArrayList.prototype.myToString = function() {
    let getString = '[';
    for(let i = 0; i < this.size; i++) {
        if (i === (this.size - 1)) {
            getString += this.array[i];
        }
        else {
            getString += this.array[i] + ', ';
        }
    }
    getString += ']'
    return getString;
}

ArrayList.prototype.myClear = function() {
    this.array = [];
    this.size = 0;
}

ArrayList.prototype.myReverse = function() {
    const reversedArray = [];
    for(let i = this.array.length - 1, j = 0; i >= 0; i--, j++) {
        reversedArray[j] = this.array[i];
    }
    return reversedArray;
}

ArrayList.prototype.mySlice = function(from, to) {
    if(from > 0 && to > 0) {
        let slicedArray = [];
        for(let i = from; i < to; i++) {
            slicedArray[slicedArray.length] = this.array[i];
        }
        this.myInit(slicedArray);
        return slicedArray;
    }
}

const aList = new ArrayList();

aList.myInit([1, 2, 3, 4, 5]);
console.log(`\nArray: `, aList.array);
console.log(`Size: ${aList.mySize()}`)
console.log(`\nDelete last element from array: ${aList.myPop()} - `, aList.array);
console.log(`\nAdd element end of array: ${aList.myPush(2)} - `, aList.array)
console.log(`\nDelete first element from array: ${aList.myShift()} - `, aList.array)
console.log(`\nAdd elemet on first index array: ${aList.myUnShift(8)} - `, aList.array)
console.log(aList.myToString());
console.log('\nClear array - ') + aList.myClear() + console.log(aList.array);
console.log(`\nReverse - ${aList.array} => ${aList.myReverse()}`);
console.log(`\nDelete selected array index - ${aList.mySlice(1, 3)}`, aList.array);

module.exports = ArrayList;
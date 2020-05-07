// Problem 1.


function removeFirst(array, i = 0) {
    if (array.length === 0 || array.length - 1 === i){
        array.length = i;
        return array;
    }
    array[i] = array[i + 1];
    i++;
    return removeFirst(array, i)
}


// Problem 2.


function invertion(object) {
    let values = Object.values(object);
    let keys = Object.keys(object);
    let result = {};
    values.forEach((el,i) => {
        if(res.hasOwnProperty(el)){
            let array = [];
            array.push(result[el]);
            array.push(keys[i]);
            result[el] = array;
        }else {
            result[el] = keys[i];
        } 
    });
    return result;
}


// Problem 3.

function sort(array) {
    return array.filter((element) => 
      element.readStatus).sort((el1,el2) => 
      el1.percent > el2.percent ? -1: 1);
}


// Problem 4.


function shift(array, n) {
    if (n === 0 || n === array.length) {
        return array;
    } 
    let element = array.pop();
    array.unshift(element); 
    n++;    
    return shift(array,n);
}


//Problem 7.

function ObjectMap() {
    this.map = function(f){
        let newObject = {};
        for (let key in this){     
            if (typeof this[key] !== 'function') {
                newObject[key] = f(this[key],key, this);
            }
        } return newObject;
    }
}









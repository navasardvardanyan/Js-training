// Problem 1.

function isOdd(n) {
    if(n < 0) {
        n = -n;
    }
    if ((n % 10) % 2 === 0) {
        return false;
    }
    n = Math.floor(n / 10);  
    if (n === 0){
        return true;
    }
    return isOdd(n);
}


// Problem 2.

function minPosNum(array) {
    
    for(let i = 0; i < array.length; i++) {
        if(array[0] < 0 || array[i] >= 0 && array[i] < array[0]){
            array.shift(0);
            minPosNum(array); 
        }
    }
    if(array[0] < 0 || array[0] === undefined) return -1;
    return array[0];
    
}

// Problem 3.

function fibArray(n) {
    if(n === 0) {
        return [];
    }if(n === 1) {
        return [1];
    }if(n === 2) {
        return [1,1];
    }
    let array = fibArray(n - 1);
    array.push(array[array.length - 1] + array[array.length - 2]);
    return array;
} 


// Problem 4.

function arrayFlatten(array, result = []) {
    if (array.length === 0) {
        return result;
    }
    let firstEl = array[0];
    let rest = array.slice(1);

    if (Array.isArray(firstEl)) {
        return arrayFlatten(firstEl.concat(rest),result);
    } 
    result.push(firstEl);
    return arrayFlatten(rest, result);
}

// problem 5.

function sumOfDigits(n) {
    let sum = 0;
    while(n !== 0) {
        sum += n % 10;
        n = Math.floor(n/10); 
    }
    if(Math.floor(sum/10) !== 0) {
        return sumOfDigits(sum);
    }
    return sum;
}





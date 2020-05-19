// Problem 1.

function isUnique(array) {
    for(let i = 0; i < array.length-1; i++) {
        for(j = i + 1; j < array.length; j++) {
            if(array[j] === array[i]) {
                console.log("It is not a unique array.")
                return false;
            }
        }
    }
    console.log("It is a unique array.");
    return true;
}



// Problem 2.

function sum(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        if(Math.sqrt(array[i]) % 2 === 0) {
            sum += array[i];
        }
    }
    return sum;
}


// Problem 3.

function isPalindrome(string) {
    let array = string.split('');
    for(let i = 0; i < array.length; i++) {
        if(array[i] != array[array.length-1-i]) {
            return false;
        }
    }
    return true;
}

// Problem 4.

function findsCorrectSublist(string,array) {
    let resultArray = [];
    let j,k;
    for(let i = 0; i < array.length; i++) {
        if(string.split('').sort().join('') === 
        array[i].split('').sort().join('')) {
            resultArray.push(array[i]);
        }
    }
    return resultArray;
}









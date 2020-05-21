// Second solution of problem 1.
function isUnique(array) {
    for(let i = 0; i < array.length-1; i++) {
        if(array.includes(array[i],i+1)) return false;
    }
    return true;
}

// Second solution of problem 2.
function sum(array) {
    let sum = 0;
    array.forEach(element => { 
        if(Math.sqrt(element) % 2 === 0){
        sum += element;
        }
    });
    return sum; 
}

// second solution of problem 4.
function findsCorrectSublist1(string,array) {
    return array.filter(element => stringSorting(string) === stringSorting(element));
}
function stringSorting(string) {
    return string.split('').sort().join('');
}
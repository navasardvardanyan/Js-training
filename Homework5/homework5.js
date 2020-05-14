// Problem 1.

function binarySearch(array, n) {
    let startIndex = 0;
    let lastIndex = array.length - 1;
    while(lastIndex - startIndex !== 0) {
        if(n >= array[Math.ceil((lastIndex + startIndex)/2)]) {
            startIndex = Math.ceil((lastIndex + startIndex)/2);
        } else lastIndex = Math.floor((lastIndex + startIndex)/2);
    }    
    return startIndex;

}



// Problem 1.

function isPrime(n){
    let count = 0;
    for(let i = 2; i <= n; i++) {
        if(n % i === 0){
            count++;
        }
    }
    if(count > 1 || count === 0){
        console.log("It is not a prime number")
    }else console.log("It is a prime number")  
}


// Problem 2.

function fibonacciNumber(n) {
    let arr = [];
    arr[0] = 0;
    arr[1] = 1;
    for(let i = 2; i <= n; i++){
        arr[i] = arr[i-1]+arr[i-2];
    }
    console.log(arr[n]);
}


// Problem 3.

function fibonacciSeries(n) {
    let arr = [];
    arr[0] = 0;
    arr[1] = 1;
    for(let i = 0; i <= n; i++) {
        if (arr[i] + arr[i + 1] <= n) {
        arr[i + 2] = arr[i] + arr[i + 1];
        } else break;
    }
    console.log(arr);
}


// Problem 4.


function computationOfQuotientOrRemainder(n) {
    if(n === 0) {
        console.log("Cannot calculate");
        return;
    } 
    if(Math.floor(n / 10) === 0) {
        console.log("1");
        return;
    }
    let sum = 0;
    let product = 1;
    while(Math.floor(n/10) !== 0) {
        sum += n % 10;
        product *= n % 10;
        n = Math.floor(n/10);
    }
    sum += n;
    product *= n;
    if(product % sum === 0) {
        console.log(product / sum);
    } else console.log(product % sum);
}


// Problem 9.

function arrayCreator(a, b, num) {
    let arr = [];
    if(num === 0) {
        return arr;
    } 
    if(num === 1) {
        arr[0] = a;
        return arr;
    }
    for(let i = 0; i < num; i++) {
        arr[i] = a + ((b - a) / (num - 1)) * i;
    }
    return arr;
}


// Problem 10.

function indexOfSecondMaxElement(arr) {
    let maxIndex = 0;
    let secMaxIndex = 1;
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > arr[maxIndex]) {
            secMaxIndex = maxIndex;
            maxIndex = i;
        }
        if(arr[i] < arr[maxIndex] && arr[i] > arr[secMaxIndex]) {
            secMaxIndex = i;
        }
        
    }
    return secMaxIndex;
}





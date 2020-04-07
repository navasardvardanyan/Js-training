//Problem 1 

function oddEven(number) {
    console.log(number % 2 === 0 ? "Even" : "Odd");
}


// Problem 2

function IsDivisibleBy(a, b) {
    if (a % b === 0 || b % a === 0) {
        console.log(1);
    } else {
        console.log(0);
    }
}


// Problem 3

function angle(a, b) {
    let c = 180 - (a + b);
    console.log(c);
}


// Problem 4

function numbersSum(n) {
    let count = 1;
    let temporary = n;
    while (Math.floor(temporary / 10) !== 0) {
        count++;
        temporary = temporary / 10;
    }
    n = n + (n * Math.pow(10, count) + n) + (n * Math.pow(10, count * 2) + (n * Math.pow(10, count) + n));
    console.log(n);
}


// Problem 5

function moveDigit(n) {
    if (n % 10 === 0) {
        console.log(n);
        return;
    }
    let count = 1;
    let number = n % 10;
    let end = Math.floor(n / 10);
    while (Math.floor(n / 10) !== 0) {
        n = Math.floor(n / 10);
        count = count * 10;
    } console.log((number * count) + end);

}


// Problem 6

function numbersAverage(a, b, c, d, e) {
    let average = (a + b + c + d + e) / 5;
    console.log(average);
}


// Problem 7

function isDivisible(a) {

    if (a % 3 === 0 && a % 5 === 0 && a % 7 === 0) {
        console.log(`${a} is a multiple of ${3}, ${5}, ${7}.`);

    } else if (a % 3 === 0 && a % 5 === 0) {
        console.log(`${a} is a multiple of ${3}, ${5}.`);

    } else if (a % 3 === 0 && a % 7 === 0) {
        console.log(`${a} is a multiple of ${3}, ${7}.`);

    } else if (a % 5 === 0 && a % 7 === 0) {
        console.log(`${a} is a multiple of ${5}, ${7}.`);

    } else if (a % 3 === 0) {
        console.log(`${a} is a multiple of ${3}`);

    } else if (a % 5 === 0) {
        console.log(`${a} is a multiple of ${5}`);

    } else if (a % 7 === 0) {
        console.log(`${a} is a multiple of ${7}`);

    } else {
        console.log(`${a} is not a multiple of ${3}, ${5}, ${7}.`);
    }
}


// Problem 8

function age(a, b) {
    if (b === "months") {
        if (a >= 1 && a <= 12) {
            console.log("baby");
        }
    } else if (b === "years") {
        if (a === 1 || a === 2) {
            console.log("toddler");
        } else if (a >= 3 && a <= 12) {
            console.log("child");
        } else if (a >= 13 && a <= 17) {
            console.log("teenager");
        } else if (a >= 18) {
            console.log("adult");
        }
    }
}


// Problem 9

function sortByIncreasing(a, b, c) {
    if (a <= b && b <= c) {
        console.log(a, b, c)
    } else if (a <= c && c <= b) {
        console.log(a, c, b)
    } else if (b <= a && a <= c) {
        console.log(b, a, c)
    } else if (b <= c && c <= a) {
        console.log(b, c, a)
    } else if (c <= a && a <= b) {
        console.log(c, a, b)
    } else if (c <= b && b <= a) {
        console.log(c, b, a)
    }
}


// Problem 10 

function examPass(a, b, c) {
    if (a >= 40 && b >= 40 && c >= 40) {
        console.log("Passed");
        return;
    }
    if (a >= 40 && b >= 40 && c >= 0 || a >= 40 && b >= 0 && c >= 40 || a >= 0 && b >= 40 && c >= 40) {
        if ((a + b + c) / 3 >= 50) {
            console.log("Passed");
            return;
        }
    } console.log("Not passed");
}


// Problem 11

function checkTheSign(a, b, c) {
    let count = 0;
    if (a === 0 || b === 0 || c === 0) {
        console.log("unsigned");
    } else {
        if (a < 0) {
            count++;
        }
        if (b < 0) {
            count++;
        }
        if (c < 0) {
            count++;
        }
        if (count % 2 === 0) {
            console.log("+");
        } else {
            console.log("-");
        }
    }
}

// Problem 12


function solveQuadraticEquation(a, b, c) {
    let dis;
    let x1;
    let x2;
    if (a === 0) {
        console.log("Enter valid constans");
    } else {
        dis = Math.pow(b, 2) - 4 * a * c;
        if (dis > 0) {
            x1 = -b - Math.sqrt(dis) / 2 * a;
            x2 = -b + Math.sqrt(dis) / 2 * a;
            console.log("Solutions are " + x1 + " and " + x2);
        } else if (dis === 0) {
            x1 = -b / 2 * a;
            console.log("Solution is " + x1);
        } else if (dis < 0) {
            console.log("Solution does not exist");
        }
    }
}


// Problem 13

var n = +prompt();
var i = 0;
var j = 0;
if (n % 2 === 0 && !Math.floor(n / 10)) {
    i += 1;
}
if (n % 3 === 0 && n % 10 === 1) {
    j += 1;
}


// Problem 14

function findDigit(a, b) {
    while (Math.floor(b / 10) !== 0) {
        if (b % 10 === a) {
            console.log("Yes");
            return;
        }
        b = Math.floor(b / 10);
    }
    if (b === a) {
        console.log("Yes");
    } else console.log("No");
}


//Problem 15


function swapDigits(n) {
    let first;
    let last = n % 10;
    let count = 1;
    let temporary = n;
    if (Math.floor(n / 10) === 0) {
        console.log(n);
        return;
    }
    while (Math.floor(temporary / 10) !== 0) {
        count = count * 10;
        temporary = Math.floor(temporary / 10);
    }
    first = temporary;
    n = last * count + ((n % count) - last + first);
    console.log(n);
}


// Problem 17

function areaOfFigures(a, b) {
    if (a <= 0 || b <= 0) {
        console.log("Please enter only positives");
    } else {
        let figure = prompt("What figure would you like to choose?");
        if (figure === "Triangle") {
            area = a * b / 2;
            console.log("Square of the triangle is " + area);
        } else if (figure === "Rectangle") {
            area = a * b;
            console.log("Square of the rectangle is " + area);
        }
    }
}


// Problem 18

function digitsDefference(n) {
    let minimum = n % 10;
    let maximum = 0;
    let digit;
    if (Math.floor(n / 10) === 0) {
        return 0;
    }
    while (Math.floor(n / 10) !== 0) {
        digit = n % 10;
        if (maximum <= digit) {
            maximum = digit;
        } if (minimum < digit) {
            minimum = digit;
        }
        n = Math.floor(n / 10);
    } if (n > maximum) {
        maximum = n;
    } if (n < minimum) {
        minimum = n;
    }
    return maximum - minimum;
}
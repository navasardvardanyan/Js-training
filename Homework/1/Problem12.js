function solveQuadEquation(a,b,c) {
    let discriminant;
    let x1;
    let x2;
    if (a === 0){
        console.log("Enter valid constans");
    } else {
        discriminant = Math.pow(b, 2) - 4 * a * c;
        if(discriminant > 0) {
            x1 = -b - Math.sqrt(discriminant) / 2 * a;
            x2 = -b + Math.sqrt(discriminant) / 2 * a; 
            console.log("Solutions are " + x1 + " and " + x2);
        }else if(discriminant === 0) {
            x1 = -b / 2 * a;
            console.log("Solution is " + x1 );
        } else if(discriminant < 0) {
            console.log("Solution does not exist");
        }
    }
}
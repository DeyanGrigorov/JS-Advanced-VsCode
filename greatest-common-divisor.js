function gcd(a, b){
    while (b != 0){
        const temp = b;
        b = a % b;
        a = temp;

    }
    return a;
}



// function gcd(a, b){
//     while (a != b){
//         if (a > b){
//             a = a - b;
//         }else{
//             b = b - a;
//         }
//     }
//     return a;
// }

console.log(gcd(2154, 458))
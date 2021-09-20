function sameNumbers(num){
    let sumDigits = 0
    let sameBoolean = true
    const splitDigits = ("" + num).split("").map(Number);
    for (let i = 0; i < splitDigits.length; i++){
     
        sumDigits += splitDigits[i]
    }
    sameBoolean = splitDigits.every( (val, i, arr) => val === arr[0])
    console.log(sameBoolean)
    console.log(sumDigits)
}

sameNumbers(1234)
sameNumbers(2222222)

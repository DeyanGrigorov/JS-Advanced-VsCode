function buyFruit(fruit, weight, money){
    const moneyNeeded = ((weight/1000)  * money).toFixed(2);
    const kilograms = (weight/1000).toFixed(2);
    console.log(`I need $${moneyNeeded} to buy ${kilograms} kilograms ${fruit}.`)
}


buyFruit('orange', 2500, 1.80)
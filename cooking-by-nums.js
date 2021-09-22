function cookingMath(num, ...params) {
  let number = parseFloat(num);
  let operations = [...params];
  let finalNumbers = [];

  for (operation in operations) {
    let currentOperation = operations[operation];
    let newProduct = 0;
    if (currentOperation == "chop") {
      newProduct = number / 2;
      number = newProduct;
      finalNumbers.push(newProduct);
    } else if (currentOperation == "dice") {
      newProduct = Math.sqrt(number);
      number = newProduct;
      finalNumbers.push(newProduct);
    } else if (currentOperation == "spice") {
      newProduct = number + 1;
      number = newProduct;
      finalNumbers.push(newProduct);
    } else if (currentOperation == "bake") {
      newProduct = number * 3;
      number = newProduct;
      finalNumbers.push(newProduct);
    } else if (currentOperation == "fillet") {
      newProduct = number - number / 100 * 20;
      number = newProduct;
      finalNumbers.push(newProduct);
    }
  }

  console.log(finalNumbers.join(" "));
}

cookingMath("32", "chop", "chop", "chop", "chop", "chop");
cookingMath("9", "dice", "spice", "chop", "bake", "fillet");

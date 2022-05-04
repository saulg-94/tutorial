/*
## Functions #5

1. create "calculateTotal" function
2. add two parameters subTotal, tax
3. return sum of parameters
4. create 3 vars "order1","order2","order3"
5. call calculateResult, pass in some values and assign result to each order
6. log all three orders
7. refactor "calculateTotal" to function expression
*/

const calculateTotal = function (subTotal, tax) {
  return subTotal + tax;
};
console.log(calculateTotal(5, 2));

var order1 = 14;
var order2 = 16;
var order3 = 36;

calculateTotal(order1, 2);
calculateTotal(order2, 2);
calculateTotal(order3, 2);

console.log(order1);
console.log(order2);
console.log(order3);

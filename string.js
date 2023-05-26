//using single Quote
var x = 'Hy';
console.log("Single quote using x", x);
//Double Quotes
var y = "Hello";
console.log("Double quote using y", y);
//Template Literals or Template String 
var z = "Once Upon a Time  \nThere was a King.";
console.log("The value of Z using Template Literals/String", z);
//Combination of variable with strings
// variable => Number is concatenated with string then it value will be string.
var a1 = 100;
var result = "100" + 100;
console.log('The value of the Result', result);
console.log('The type of the Result', typeof (result));
console.log('The Addition of the Result', eval(result));
var sum = "100" + 100;
console.log('The Addition of the sum', eval(sum));
var sum1 = eval("100" + 100);
console.log('The Type of the sum1', typeof (sum1));
console.log(eval("10+20+10+60"));
//type Homogenous : Type => Result Homogenous:Number
//type Homogenous : String => Result string
var x1;
var x2;
x1 = 10;
x2 = 30;
console.log('Result = ', (x1 + x2), 'Type = ', typeof (x1 + x2));
var y1 = 20;
var y2 = "30";
var total = y1 - y2;
console.log("Result of Total", total);
//Note :: TypeScript is flexible if Type is any : then conversion will be automatically done.
//if Type is strictly declared in that case : Type Error.
// How you can use variable inside Template string
var Name = "Prabhat";
var age = 22;
var str = "The Name is ".concat(Name, " and Age is ").concat(age);
console.log(str);

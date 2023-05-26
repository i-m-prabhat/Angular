"use strict";

function add(num1, num2)
{
    if (typeof num1 == 'number' && typeof num2 == 'number')
    {
        return num1 + num2;
    } else
    {
        console.error("Invalid Type");
        return 0;
    }
}

console.log(add(5, 6));
console.log(add(5, '6'));

function concatenate(x, y)
{
    return x + y;
}

console.log(concatenate('10', '20'))
console.log(concatenate(+'10', +'20'))
console.log(concatenate(10, 20))
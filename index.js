console.log("hello world");

var fs = require('fs');
var array = fs.readFileSync('day1.input.txt').toString().split("\n");

const result = array.reduce(
    (accumulator, currentValue) => {
        if (currentValue === "") {
            accumulator.push(0);
        } else {
            accumulator[accumulator.length-1]+= +currentValue;
        }
        return accumulator;
    },
    []
);

const answer = result.reduce(
    (acc,val,idx) => {
        if (val>acc.val) return {idx,val};
        return acc;
    },
    {idx:-1,val:0}
);

console.log(answer);
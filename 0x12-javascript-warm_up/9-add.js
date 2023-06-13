#!/usr/bin/node

/**
 * A script that prints the addition of 2 numbers
 * The first argument is the first integer
 * The second argument is the second integer
 * You have to define a function with this prototype: function add(a, b)
 */

function add (a, b) {
  return a + b;
}

// use to extract the command line argument passed to the script
// and stores them in args

const arg1 = parseInt(process.argv[2]);
const arg2 = parseInt(process.argv[3]);

if (isNaN(arg1) || isNaN(arg2)) {
  console.log(NaN);
} else {
  console.log(add(arg1, arg2));
}

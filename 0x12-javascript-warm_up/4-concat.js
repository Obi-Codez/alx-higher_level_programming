#!/usr/bin/node

/**
 * A script that prints two arguments passed to it, in the following format: “ is ”
 */

// use to extract the command line argument passed to the script
// and stores them in args

const arg1 = process.argv.slice(2);
const arg2 = process.argv.slice(3);

if (!arg1 || !arg2) {
  console.log('undefined is undefined');
} else {
  const arg1 = process.argv[2];
  const arg2 = process.argv[3];
  console.log(`${arg1}` + ' is ' + `${arg2}`);
}

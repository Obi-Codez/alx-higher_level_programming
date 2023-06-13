#!/usr/bin/node

/**
 * A script that prints the first argument passed to it
 * If no arguments are passed to the script, print “No argument”
 */

// use to extract the command line argument passed to the script
// and stores them in args

const arg = process.argv[2];

if (arg === undefined) {
  console.log('No argument');
} else {
  console.log(arg);
}

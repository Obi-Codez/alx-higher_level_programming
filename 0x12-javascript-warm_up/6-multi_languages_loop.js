#!/usr/bin/node

/**
 * A script that prints 3 lines of code
 * The first line: "C is fun"
 * The second: "Python is cool"
 * The third: "JavaScript is amazing"
 */

const sentences = ['C is fun', 'Python is cool', 'JavaScript is amazing'];

let i = 0;

while (i < sentences.length) {
  console.log(sentences[i]);
  i++;
}

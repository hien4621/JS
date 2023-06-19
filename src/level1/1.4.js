/**
 * Write a program that takes a list of numbers as input and displays the largest number in the list.
 * @param {[]} arr 
 * @returns largest number
 */

function largestnum(arr) {
    let max=arr[0];
    for (let element of arr) {
        if (element>max) {
            max=element;
        }
    }
    if (arr.length===0) return -1; else return max;
  }
  module.exports = largestnum;
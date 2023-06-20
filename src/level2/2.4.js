/**
 * Write a program that takes a list of numbers as input and returns the sum of the numbers that are divisible by both 3 and 5.
 * @param {[]} arr 
 * @returns sum of numbers divisible by 3 and 5
 */

function sumofnum(arr) {
    var sum=0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 5 == 0 && arr[i] % 3 == 0) sum += arr[i];
    }
    return sum
}
    module.exports = sumofnum;
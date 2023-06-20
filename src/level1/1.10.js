/**
 * Write a program that takes a list of strings as input and returns the number of strings that contain the letter 'a'.
 * @param {[]} list
 * @returns number of string contain a
 */
function numstr(list) {
    count=0;
    for (let str of list)
    {
        for (let char of str)
        {
            if (char==='a') {
                count+=1;
                break;
            }
        }
    }
    return count;
  }
  module.exports = numstr;
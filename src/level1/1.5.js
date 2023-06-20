/**
 * Write a program that takes a list of strings as input and displays the shortest string in the list.
 * @param {[]}} str
 * @returns Shortest str
 */

function shorteststring(arr) {
    if (arr.length === 0) return -1;
    else {
        let short = arr[0].length;
        for (let element of arr) {
            if (element.length < short) {
                short = element.length;
                shortstr = element;
            }
        }
        return shortstr;
    }
}
module.exports = shorteststring;
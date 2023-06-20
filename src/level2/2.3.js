/**
 * Write a program that takes two strings as input and returns the longest common subsequence of the two strings.
 * @param {[]} arr
 * @returns longest common
 */
function longestcommon(arr) {
    var str1 = arr[0];
    var str2 = arr[1];
    var longestlength = 0;
    var longeststr = '';
    for (let i = 0; i < str1.length; i++)
        for (let j = i+1; j <=str1.length; j++) {
            substr1 = str1.substring(i, j)
            if ((str2.includes(substr1)) && (substr1.length > longestlength)) {
                longestlength = substr1.length;
                longeststr = substr1;
            }
        }
    if (longeststr!=='') return longeststr;else return -1;
}
module.exports = longestcommon;
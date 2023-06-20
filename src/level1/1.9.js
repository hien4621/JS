/**
 * Write a program that takes a string as input and returns the number of words in the string.
 * ( tìm số từ trong một chuỗi, VD: “Hello world" => 2 )
 * @param {[]} arr 
 * @returns median number
 */
function mediannum(arr) {
    if (arr.length === 0) return -1;
    else {
        arr.sort((i, j) => (i - j));
        middle = Math.floor(arr.length / 2);
        if (arr.length % 2 !== 0) return arr[middle];
        else return (arr[middle] + arr[middle - 1]) / 2;
    }
}
module.exports = mediannum;
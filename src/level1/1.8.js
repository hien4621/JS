/**
 * Write a program that takes a list of numbers as input and returns the median of the numbers.
 * ( Tìm số trung vị ( số trung vị không phải số trung bình cộng ))
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
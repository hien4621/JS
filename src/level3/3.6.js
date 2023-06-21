/**
 * Write a program that takes two lists of integers as input and returns the median of the combined list.
 * @param {[]} arr1
 * @param {[]} arr1 
 * @returns median of two list combined
 */
function medianTwoList(arr1,arr2) {
    newlist= arr1.concat(arr2);
    if (newlist.length === 0) return -1;
    else {
        newlist.sort((i, j) => (i - j));
        middle = Math.floor(newlist.length / 2);
        if (newlist.length % 2 !== 0) return newlist[middle];
        else return (newlist[middle] + newlist[middle - 1]) / 2;
    }
}
module.exports = medianTwoList;

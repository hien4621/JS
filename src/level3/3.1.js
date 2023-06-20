/**
 * Write a program that takes a list of numbers as input and returns the second smallest number in the list.
 * @param {[]} arr 
 * @returns second smallest
 */
function secondsmallest(arr) {

    if (arr.length > 1) {
        var min1 = arr[0];
        var min2 = arr[1];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < min1) {
                min2 = min1;
                min1 = arr[i];
            }
            else if (arr[i] < min2 && arr[i] > min1) { min2 = arr[i] }
        }
        return min2;
    }

    else return -1;
}
module.exports = secondsmallest;
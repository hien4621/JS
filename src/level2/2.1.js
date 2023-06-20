/**
 * Write a program that takes a list of numbers as input and returns the second largest number in the list.
 * @param {[]} arr 
 * @returns second largest
 */
function secondlargest(arr) {

    if (arr.length > 1) {
        var max1 = arr[0];
        var max2 = arr[1];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max1) {
                max2 = max1;
                max1 = arr[i];
            }
            else if (arr[i] > max2 && arr[i] < max1) { max2 = arr[i] }
        }
        return max2;
    }

    else return -1;
}
module.exports = secondlargest;
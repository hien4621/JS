/**
 * Write a program that takes a list of integers as input and returns the maximum difference between any two elements in the list.
 * @param {[]} arr 
 * @returns maximun differ
 */
function maxdiffer(arr) {
    if (arr.length > 1) {
        var max=0;
        // for (let i = 0; i < arr.length; i++) 
        // for (let j=i+1;j<arr.length;j++)
        // {
        //     differ= Math.abs(arr[i]-arr[j]);
        //     if (differ > max) {
        //         max=differ;
        //     }
        // }
        // return max;
        arr.sort((i,j)=>i-j);
        max= arr[arr.length-1]-arr[0];
        return max;
    }
    else return -1;
}
module.exports = maxdiffer;
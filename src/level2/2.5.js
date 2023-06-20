/**
 * Write a program that takes a list of integers as input and returns the maximum sum of any contiguous subarray within the list.
 * @param {[]} arr 
 * @returns maximum sum of contiguous subarray
 */

function maxinumsum(arr) {
    var maxsum=0;
    var sum=0;
    for (let i = 0; i < arr.length; i++) {
        sum=0;
        for (let j=i;j<arr.length;j++)
        {
            sum+=arr[j];
            if (sum>maxsum){
            maxsum=sum;
            }
        }
    }
    return maxsum;
}
    module.exports = maxinumsum;
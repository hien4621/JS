/**
 *Write a program that takes a list of integers as input and returns the longest increasing subsequence of the numbers. 
 ( Tìm độ dài của chuỗi con tịnh tiến dài nhất )
 * @param {[]} arr 
 * @returns length of longest increasing subsequence
 */
 function theLongestIncre(arr) {
    n=arr.length;
    if(n!==0)
    {
    var L= Array(n).fill(1);
    for (let i = 0; i<n; i++) {
      for (let j=0;j<i;j++) {
        if (arr[i]>arr[j] && L[i]<L[j]+1){
            L[i]=L[j]+1;
        }
      }
    }
  
    return Math.max(...L) ;
} return -1;
  }
module.exports = theLongestIncre;
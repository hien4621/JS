/**
 * Write a program that takes a list of strings as input and returns the two strings with the largest overlap of characters.
 * Tìm 2 chuỗi có nhiều số ký tự trùng nhau nhất
 * @param {[]} arr 
 * @returns two string have largest overlap characters
 */
function strOverlap(arr) {
    var max = 0;
    for (let i = 0; i < arr.length; i++) {
        let str1 = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            let str2 = arr[j];
            let arrindex = [];
            for (let k = 0; k < str1.length; k++)
                for (let h = 0; h < str2.length; h++) {
                    if (str1[k] === str2[h] && !arrindex.includes(h)) {
                        arrindex.push(h);
                    }
                }
            if (arrindex.length > max) {
                max = arrindex.length;
                strover1 = str1;
                strover2 = str2;
            }
        }
    }
    if (max !== 0)
        return [strover1, strover2];
    else return -1;
}
module.exports = strOverlap;

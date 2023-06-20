/**
 * Write a program that takes a string as input and returns the number of words in the string.
 * ( tìm số từ trong một chuỗi, VD: “Hello world" => 2 )
 * @param {string} str
 * @returns number of words
 */
function numword(str) {
    count = 0;
    newstr=str.trim();
    if (newstr!==''){
    for (i = 0; i < newstr.length; i++) {
        if (newstr[i] === ' ' && newstr[i + 1] !== ' ')
            count += 1;
    }
    if (newstr[newstr.length - 1] !==' ') count += 1;
    return count;
} else return count;
}
module.exports = numword;
/**
 * Write a program that takes a list of strings as input and returns the longest word in the list.
 * @param {[]} list
 * @returns longest word
 */
function longestword(list) {
    if (list.length !== 0) {
        longestlength = list[0].length;
        for ( let i = 0; i < list.length; i++) {
            newlist=list[i].trim()
            if (newlist.length>longestlength)
            {
                longestlength=newlist.length;
                longest=newlist;
            }
        }
        return longest;
    }
    else return -1;
}
module.exports = longestword;
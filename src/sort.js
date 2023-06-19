/**
 * Sap xep mang so
 * @param {number[]} arr 
 * @returns array order
 */
function sort(arr) {
  return arr.sort((i, j) => i - j);
}
module.exports = sort;
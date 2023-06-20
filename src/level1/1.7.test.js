const sort = require('./1.7.js');

test('test 1', () => {
    const arr = ['hi', 'everyone', '!'];
    const sortedArr = sort(arr);
    expect(sortedArr).toEqual(['!','everyone','hi']);
});

test('test 2', () => {
    const arr = ['apple', 'potato', 'grape'];
    const sortedArr = sort(arr);
    expect(sortedArr).toEqual(['apple', 'grape', 'potato']);
});
test('test 3', () => {
    const arr = ['123', '012', '34'];
    const sortedArr = sort(arr);
    expect(sortedArr).toEqual(['012', '123', '34']);
});
test('test 4', () => {
    const arr = ['', 'have', 'a'];
    const sortedArr = sort(arr);
    expect(sortedArr).toEqual(['','a', 'have']);
});

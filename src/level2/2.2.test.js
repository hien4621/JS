const longestword = require('./2.2.js');

test('test 1', () => {
    const list = ['hi', 'everyone', '!'];
    expect(longestword(list)).toEqual('everyone');
});

test('test 2', () => {
    const list = ['apple', 'potato', 'grape'];
    expect(longestword(list)).toEqual('potato');
});
test('test 4', () => {
    const list = ['', 'have', 'a'];
    expect(longestword(list)).toEqual('have');
});
test('test 5', () => {
    const list = [];
    expect(longestword(list)).toEqual(-1);
});
test('test 6', () => {
    const list = ['    ', 'hello', '     world   '];
    expect(longestword(list)).toEqual('hello');
});


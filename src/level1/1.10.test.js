const numstr = require('./1.10.js');

test('test 1', () => {
    const list = ['hi', 'everyone', '!'];
    expect(numstr(list)).toEqual(0);
});

test('test 2', () => {
    const list = ['apple', 'potato', 'grape'];
    expect(numstr(list)).toEqual(3);
});
test('test 3', () => {
    const list = ['123', '012', '34'];
    expect(numstr(list)).toEqual(0);
});
test('test 4', () => {
    const list = ['', 'have', 'a'];
    expect(numstr(list)).toEqual(2);
});
test('test 5', () => {
    const list = [];
    expect(numstr(list)).toEqual(0);
});

const longestcommon = require('./2.3.js');

test('test 1', () => {
    const list = ['hi', 'everyone'];
    expect(longestcommon(list)).toEqual(-1);
});

test('test 2', () => {
    const list = ['apple', 'potato'];
    expect(longestcommon(list)).toEqual('a');
});
test('test 3', () => {
    const list = ['have', 'ave'];
    expect(longestcommon(list)).toEqual('ave');
});
test('test 4', () => {
    const list = ['',''];
    expect(longestcommon(list)).toEqual(-1);
});
test('test 5', () => {
    const list = ['    ', 'hello   '];
    expect(longestcommon(list)).toEqual('   ');
});
test('test 6', () => {
    const list = ['abcdef', 'bjhiuhcdef'];
    expect(longestcommon(list)).toEqual('cdef');
});


const strOverlap = require('./3.4.js');

test('test 1', () => {
    const list = ['hi', 'everyone'];
    expect(strOverlap(list)).toEqual(-1);
});

test('test 2', () => {
    const list = ['apple', 'potato','grape'];
    expect(strOverlap(list)).toEqual(["apple", "grape"]);
});
test('test 3', () => {
    const list = ["hello", "world", "foobar", "barfoo", "he", "llo"];
    expect(strOverlap(list)).toEqual(["foobar", "barfoo"]);
});
test('test 4', () => {
    const list = ["have", "a", "exellent", "talent"];
    expect(strOverlap(list)).toEqual(["exellent", "talent"]);
});



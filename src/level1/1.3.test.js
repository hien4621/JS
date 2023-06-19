const square = require('./1.3.js');

test('Test1', () => {
    expect(square(4)).toEqual(16);
});
test('Test2', () => {
    expect(square(0)).toEqual(0);
});
test('Test3', () => {
    expect(square(10)).toEqual(100);
});
test('Test4', () => {
    expect(square(1.5)).toEqual(2.25);
});

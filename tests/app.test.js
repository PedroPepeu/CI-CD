const greet = require('../src/app');

describe('Greet function', () => {
  test('greets properly', () => {
    expect(greet('World')).toBe('Hello, World');
  });

  test('greets with custom name', () => {
    expect(greet('Alice')).toBe('Hello, Alice');
  });
}); 
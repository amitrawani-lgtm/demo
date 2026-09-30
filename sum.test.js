import sum from './sum.js';

describe('sum', () => {
  test('should return the sum of two numbers', () => {
    expect(sum(2, 3)).toBe(5); 
    });

    test('should return the sum of negative numbers', () => {
        expect(sum(-2, -3)).toBe(-5);
    });
})
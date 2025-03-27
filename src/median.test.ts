import { median } from "./median";

test("test median for odd numbers of elements", () => {
    // Arrange
    const numbers: number[] = [1, 3, 5, 7, 9];
    const expected: number = 5;
  
    // Act
    const actual: number = median(numbers);
  
    // Assert
    expect(actual).toBe(expected);
  });
  
  test("test median for even numbers of elements", () => {
    // Arrange
    const numbers: number[] = [1, 3, 5, 7];
    const expected: number = 4;
  
    // Act
    const actual: number = median(numbers);
  
    // Assert
    expect(actual).toBe(expected);
  });
  
  test("test median for no elements", () => {
    // Arrange
    const numbers: number[] = [];
  
    // Assert Act
    expect(() => median(numbers)).toThrow("Median for empty Arrays is not defined");
  });
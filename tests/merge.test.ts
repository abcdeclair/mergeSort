import merge from "../src/merge";

describe("test merge function", () => {
  test("Merge Success", () => {
    const col1: number[] = [-2, 0, 3, 4, 10];
    const col2: number[] = [9, 5, 1, -7];
    const col3: number[] = [-10, -1, 2];
    const expectResult: number[] = [-10, -7, -2, -1, 0, 1, 2, 3, 4, 5, 9, 10];
    const actualResult: number[] = merge(col1, col2, col3);
    expect(actualResult).toEqual(expectResult);
  });

  test("Merge with empty array", () => {
    const col1: number[] = [];
    const col2: number[] = [10, 2, -1];
    const col3: number[] = [];
    const expectResult: number[] = [-1, 2, 10];
    const actualResult: number[] = merge(col1, col2, col3);
    expect(actualResult).toEqual(expectResult);
  });
});

import { sum } from "../sum";

test("Sum function should calculate the sum of two numbers", () => {
  const result = sum(2, 3);
  // Assertion
  expect(result).toBe(5);
});

test("Calculate the sum of two number 3, 6:", () => {
  const result = sum(3, 6);
  //Assertion
  expect(result).toBe(9);
});

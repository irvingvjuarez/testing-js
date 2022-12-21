const sum = require("./sum");
const multiply = require("./multiply");
const divide = require("./divide");
const substract = require("./substract");

test("math operations", () => {
  expect(sum(1, 2)).toBe(3);
  expect(multiply(2, 10)).toBe(20);
  expect(divide(10, 5)).toBe(2);
  expect(substract(20, 10)).toBe(10);
});

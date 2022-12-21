test("correct object schema", () => {
  const data = { name: "Irving" };
  data.lastName = "Juárez";

  expect(data).toEqual({ name: "Irving", lastName: "Juárez" });
});

test("Variable to be null", () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).toBeFalsy();
  expect(data).not.toBeUndefined();
});

test("Strings assertions", () => {
  const str = "Irving";
  expect(str).toMatch(/ving/);
});

test("Lists/arrays assertions", () => {
  const arr = [1, 2, 3, 4];
  expect(arr).toContain(4);
});

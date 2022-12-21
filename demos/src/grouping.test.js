describe("First group", () => {
  let i = 0;

  beforeEach(() => {
    i += 1;
    // Doing something with the i variable
  });

  test("First test", () => {
    expect(1 + 1).toBe(2);
  });

  test("Second test", () => {
    expect(2 + 2).toBe(4);
  });

  test("Third test", () => {
    expect(3 + 3).toBe(6);
  });
});

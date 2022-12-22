const Person = require("./person");

describe("Testing person Corporal Mass Index - CMI", () => {
  const person = new Person("Irving", 45, 1.7);

  test("Down CMI", () => {
    expect(person.calcIMC()).toBe("down");
  });

  test("Normal CMI", () => {
    person.weight = 59;
    expect(person.calcIMC()).toBe("normal");
  });
});

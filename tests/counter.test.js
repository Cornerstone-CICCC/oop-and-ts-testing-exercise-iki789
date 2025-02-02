// Create two test cases for incrementing and decrementing a number
// Test case 1: counter(10, 'increment') will eventualy return 10
// Test case 2: counter(10, 'decrement') will eventually return 0
// Both test cases need to pass
// HINT: Use the jest `resolves` matcher so that it is easier to work with async functions

const counter = require("../src/counter");

describe("Counter check", () => {
  it("should eventualy increment return 2", async () => {
    const result = await counter(2, "increment");
    expect(result).toBe(2);
  });

  it("should eventualy decrement return 2", async () => {
    const result = await counter(2, "decrement");
    expect(result).toBe(0);
  });
});

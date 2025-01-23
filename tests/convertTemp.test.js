// Create two test cases for converting between celsius and fahrenheit
// Test case 1: Converting 30 deg celsius will return 86 deg fahrenheit
// Test case 2: Converting 104 deg fahrenheit will return 40 deg celsius
// Both test cases need to pass

const Converter = require("../src/convertTemp");

let convert;

describe("Weather check", () => {
  beforeEach(() => {
    convert = new Converter();
  });
  it("should convert 30c and return 86f", () => {
    const result = convert.convertToFahrenheit(30);
    expect(result).toBe(86);
  });
  it("should convert 104f and return 40c", () => {
    const result = convert.convertToCelsius(104);
    expect(result).toBe(40);
  });
});

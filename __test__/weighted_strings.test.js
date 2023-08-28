const weightedStrings = require("../weighted_strings");

test("Testing Weighted Strings ", () => {
  const string = "abbcccd";
  const queries = [1, 3, 9, 8];

  const result = weightedStrings(string, queries);
  const expected = ["Yes", "Yes", "Yes", "No"];

  expect(result).toEqual(expected);
});

const balancedbracket = require("../balanced_bracket");

test("Testing Balanced Bracket", () => {
  const resultSampel3 = balancedbracket("{(([])[])[]}");
  const expectedSampel3 = "YES";

  console.log(resultSampel3);
  expect(resultSampel3).toEqual(expectedSampel3);
});

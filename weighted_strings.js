function hitungBobot(substring) {
  const bobot = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
  };

  let currentBobot = 0;
  let totalBobot = 0;

  for (let i = 0; i < substring.length; i++) {
    currentBobot += bobot[substring[i]];
    totalBobot += currentBobot;
  }

  return totalBobot;
}

function weightedStrings(string, queries) {
  const bobot = {};

  for (let i = 0; i < string.length; i++) {
    let currentSubstring = string[i];
    let currentBobot = hitungBobot(currentSubstring);

    bobot[currentBobot] = true;

    for (let j = i + 1; j < string.length; j++) {
      currentSubstring += string[j];
      currentBobot = hitungBobot(currentSubstring);
      bobot[currentBobot] = true;
    }
  }

  const result = [];

  for (const query of queries) {
    if (bobot[query]) {
      result.push("Yes");
    } else {
      result.push("No");
    }
  }

  console.log(result);
  return result;
}

module.exports = weightedStrings;

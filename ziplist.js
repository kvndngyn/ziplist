const testLetter = ['a', 'b', 'c'];
const testNumber = [1, 2, 3];

function zipList(letters, numbers) {
  const zip = [];
  for (let i = 0; i < letters.length; i++) {
    zip.push(letters[i]);
    zip.push(numbers[i]);
  }
  return zip;
}

console.log(zipList(testLetter, testNumber));

function zipListTheSimpleWay(letters, numbers) {
  return _.flatten(_.zip(letters, numbers));
}

console.log(zipListTheSimpleWay(testLetter, testNumber));

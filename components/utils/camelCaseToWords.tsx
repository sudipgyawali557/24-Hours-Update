export function convertCamelcaseToWords(word: String) {
  return word.replace(/([A-Z])/g, " $1").replace(/^./, function (str) {
    return str.toUpperCase();
  });
}

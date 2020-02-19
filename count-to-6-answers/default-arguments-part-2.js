module.exports = function makeImportant(
  sentence,
  repeatCount = sentence.length
) {
  const result = `${sentence}${"!".repeat(repeatCount)}`;
  return result;
};

/**
 *
 * @param {string} str
 */
const parseFileNmae = (str) => {
  return str.split(" ").join("_");
};

console.log(parseFileNmae("Valid Palindrome") + ".js");

/**
 *
 * @param {string} str
 */
const parseFileNmae = (str) => {
  return str.split(" ").join("_");
};

console.log(
  parseFileNmae("Lowest Common Ancestor of a Binary Search Tree") + ".js"
);

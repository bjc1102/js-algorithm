/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
let visited;
let graph;
var accountsMerge = function (accounts) {
  // generate email graph
  // email : connected nodes[]
  graph = new Map();
  visited = new Set();

  for (let account of accounts) {
    let firstMail = account[1];

    if (!graph.has(firstMail)) graph.set(firstMail, []);
    for (let i = 2; i < account.length; i++) {
      let email = account[i];

      // add it to connect of first
      graph.get(firstMail).push(email);

      // add first to its own connected
      if (!graph.has(email)) graph.set(email, []);
      graph.get(email).push(firstMail);
    }
  }

  // perform dfs
  let mergedAcc = [];

  for (let account of accounts) {
    let name = account[0];
    let first = account[1];

    if (!visited.has(first)) {
      let current = [];
      traverse(current, first);
      current.sort();
      current.unshift(name);
      mergedAcc.push(current);
    }
  }
  // console.log(mergedAcc)
  return mergedAcc;
};

function traverse(arr, first) {
  if (visited.has(first)) return;
  arr.push(first);
  visited.add(first);
  let connected = graph.get(first) || [];
  for (let node of connected) {
    traverse(arr, node);
  }

  return;
}

/**
 * @param {number} n
 * @return {boolean}
 *
 * 끝내여하는 기준이 뭘까
 */
function isHappy(n) {
  let str = n.toString();
  const hash = new Map();
  while (hash.get(str) === undefined) {
    let tmp = 0;
    hash.set(str, 1);
    for (const x of str) {
      tmp += parseInt(x) ** 2;
    }
    if (tmp === 1) return true;
    str = tmp.toString();
    console.log(hash);
  }
  return false;
}

console.log(isHappy(19));

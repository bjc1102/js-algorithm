function solution(n) {
  let answer = 0;
  let flag = 0;

  const str = n.toString(2);

  let cl = 0;
  let target = n + 1;
  for (const x of str) {
    if (x === "1") cl += 1;
  }

  while (flag === 0) {
    const tarstr = target.toString(2);
    let nl = 0;
    for (const x of tarstr) {
      if (x === "1") nl += 1;
    }
    if (nl === cl) {
      answer = parseInt(tarstr, 2);
      break;
    }
    target += 1;
  }
  return answer;
}

console.log(solution(78));

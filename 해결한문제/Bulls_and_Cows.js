const parseString = (bulls, cows) => {
  let answer = "";
  answer += `${bulls}A${cows}B`;

  return answer;
};
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 *
 * 숫자야구이다
 *
 * 순서가 맞지 않으면..
 */
var getHint = function (secret, guess) {
  const len = secret.length;
  const map = new Map();
  let bulls = 0;
  let cows = 0;
  for (const char of secret) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }

  for (let i = 0; i < len; i++) {
    if (secret[i] === guess[i]) {
      if (map.get(guess[i]) === 0) cows -= 1;
      else map.set(guess[i], map.get(guess[i]) - 1);
      bulls += 1;
    } else {
      if (map.has(guess[i]) && map.get(guess[i]) > 0) {
        cows += 1;
        map.set(guess[i], map.get(guess[i]) - 1);
      }
    }
  }
  return parseString(bulls, cows);
};

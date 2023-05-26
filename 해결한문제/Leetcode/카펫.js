/**
 * 갈색 = 테두리 1칸
 * 노란색 = 가운데 전부
 *
 * 가로 세로의 길이를 리턴
 *
 * 가로길이가 항상 더 길거나 같다
 *
 * brown + yellow = 넓이가 된다는 공식이 성립한다
 */

function solution(brown, yellow) {
  let answer = [];
  let width = brown + yellow;
  // n * m이 width가 되는 경우를 찾아야한다
  // 이때 노란색이 가운데로 올 수 있는 경우는 세로가 3보다 크거나 같아야 함
  // 이 조건을 만족하는 것들 중 가로 - 2, 세로 -2를 곱하면 노란색의 길이가 된다
  const len = parseInt(width / 2);
  for (let i = 0; i < len; i++) {
    if (
      width % i === 0 &&
      width / i >= i &&
      (width / i - 2) * (i - 2) === yellow //yellow가 되는 조건인지까지 확인해야 한다
    ) {
      //width % i는 세로 width / i는 가로
      answer.push(width / i);
      answer.push(i);
      break;
    }
  }

  return answer;
}

console.log(solution(24, 24));

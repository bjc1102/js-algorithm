/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 *
 * 오름차순 정렬된 배열에서 두가지 원소를 뽑아 target이 되는 원소의 인덱스번호를 리턴해라
 *
 * 두 수의 맨 처음과 맨 끝을 더한 값으로 확인한다
 * 만약 더한 값이 타겟보다 작으면 lt를 증가
 * 크면 rt를 감소한다
 */
var twoSum = function (numbers, target) {
  let lt = 0;
  let rt = numbers.length - 1;

  while (lt < rt) {
    const sum = numbers[lt] + numbers[rt];
    if (sum === target) return [lt + 1, rt + 1];
    else {
      if (sum < target) lt += 1;
      else rt -= 1;
    }
  }
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}

 두 개를 선택해서 합했을 때 k를 만들 수 있는 모든 경우의 수를 구하는 것
 두 수를 어떻게 뽑을지, 뽑고나서 상태를 어떻게 해야하는지
 */
function convertArrayToHashMap(array) {
  const hashMap = new Map();

  for (var i = 0; i < array.length; i++) {
    const key = array[i];

    if (hashMap.has(key)) {
      // 이미 같은 키가 해시맵에 존재하는 경우, 값을 증가시킴
      hashMap.set(key, hashMap.get(key) + 1);
    } else {
      // 새로운 키인 경우, 해시맵에 추가
      hashMap.set(key, 1);
    }
  }

  return hashMap;
}

var maxOperations = function (nums, k) {
  const map = convertArrayToHashMap(nums);
  let answer = 0;

  for (let i = 0; i < nums.length; i++) {
    const target = k - nums[i];
    if (target === nums[i]) {
      const count = map.get(target);
      if (count >= 2) {
        map.set(target, count - 2);
        answer++;
      } else if (count === 1) continue;
      else map.delete(target);
    } else {
      const targetCount = map.get(target);
      const numCount = map.get(nums[i]);

      if (targetCount > 0 && numCount > 0) {
        if (targetCount === 1) map.delete(target);
        else map.set(target, targetCount - 1);
        if (numCount === 1) map.delete(nums[i]);
        else map.set(nums[i], numCount - 1);
        answer++;
      }
    }
  }

  return answer;
};

// 리팩토링된 코드 -> 모든 배열을 굳이 Map으로 만들지 않아도 된다 > 순서가 상관없기 때문
// 따라서 convertArrayToHashMap이 함수로 들어갔으며 현재 배열값을 넣지 않았기 때문에 같은 중복 값을 고민하지 않아도 된다. k=6 3,3이 나오는 경우..
var maxOperations = function (nums, k) {
  const map = new Map();
  let answer = 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const target = k - num;

    if (map.has(target)) {
      // target과 num이 쌍을 이루는 경우
      const targetCount = map.get(target);
      if (targetCount === 1) {
        map.delete(target);
      } else {
        map.set(target, targetCount - 1);
      }
      answer++;
    } else {
      // target이 존재하지 않는 경우, num을 해시맵에 추가
      if (map.has(num)) {
        map.set(num, map.get(num) + 1);
      } else {
        map.set(num, 1);
      }
    }
  }

  return answer;
};

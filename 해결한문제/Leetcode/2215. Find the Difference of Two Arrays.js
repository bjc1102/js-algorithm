/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 서로 다른 값을 찾아서 리턴해라
 하나의 배열을 돌면서 갖고있는건 지운다, 없다면 1번 배열에 넣는다, 배열이 다 끝나고 남은 값들은 2번 배열에 넣는다.

 */
var findDifference = function (nums1, nums2) {
  const answer = [[], []];
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  for (const value of set1) {
    if (!set2.has(value)) {
      answer[0].push(value);
    } else {
      set2.delete(value);
    }
  }

  answer[1] = Array.from(set2);

  return answer;
};

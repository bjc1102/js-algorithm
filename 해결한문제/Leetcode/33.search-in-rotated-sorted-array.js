/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 *
 * 오름차순으로 정렬된 배열이 있다.
 * pivot number(k)를 기준으로 잘려있는데 기준은 다음과 같다
 * 1 <= k < nums.length
 * [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]
 * [...k보다 큰것들, ...k보다 작은 것들]의 순서로 오름차순 정렬되어있다.
 *
 * 이러한 배열에서 시간복잡도 O(logN)으로 target number를 찾아라
 */
var search = function (nums, target) {
  let lt = 0;
  let rt = nums.length - 1;
  //어느 부분에서 숫자가 잘렸는지 알 수 있다.
  const pivot = nums[0] - 1;
  const split = nums.length;

  //   if (target > pivot) rt = split - pivot;
  //   else lt = split - pivot;

  /* 조금 정리해보면 어떻게 정렬되어있는지만 안다면 포인터를 어디로 옮겨야하는지 대충 에상할 수 있다. */
  while (lt <= rt) {
    const mid = Math.floor((lt + rt) / 2);
    if (nums[mid] === target) return mid;
    //찾고자 하는 정렬된 배열이라면
    else if (nums[lt] <= nums[mid]) {
      //정렬된 범위 안에 있는가?
      if (nums[lt] <= target && target <= nums[mid]) rt = mid - 1;
      //정렬된 범위가 아니라면
      else lt = mid + 1;
    } else {
      //정렬된 범위 안에 있는가?
      if (nums[mid] <= target && target <= nums[rt]) lt = mid + 1;
      else rt = mid - 1;
    }
  }

  return -1;
};
// @lc code=end

/**
 * @param {number[]} nums
 * @return {number}

  최대값/최소값도 아닌 정수를 반환히기
 */
var findNonMinOrMax = function(nums) {
    nums.sort((a,b) => a-b)

    if(nums.length <= 2) return -1
    return nums[1]
};

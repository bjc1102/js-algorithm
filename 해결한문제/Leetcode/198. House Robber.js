/**
 * @param {number[]} nums
 * @return {number}

 이웃집끼리 털리면 경보가 울린다.
 이때 걍보가 울리지 않고 최대한 많은 결과를 리턴
 
 현재 집을 털었을 때 최대금액과 직전 집을 털지 않았을 때의 최대 금액을 비교해야한다

 */
var rob = function(nums) {
    if(nums.length < 2) return Math.max(nums[0] || 0, nums[1] || Number.MIN_SAFE_INTEGER)
    const dy = Array.from({length: nums.length}, ()=>0)

    dy[0] = nums[0]
    dy[1] = Math.max(nums[0], nums[1])
   
    for(let i = 2; i < nums.length; i++) {
        // 실수로 nums로 해놨다.
        dy[i] = Math.max(dy[i - 1], dy[i-2] + nums[i])
    }

    return Math.max(dy[dy.length - 1], dy[dy.length - 2])
};

/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * nums는  배열로 들어P 


*/
var runningSum = function (nums) {
  let sum = nums[0];
  const answer = [sum];

  for (let i = 1; i < nums.length; i++) {
    sum += nums[i];
    answer.push(sum);
  }

  return answer;
};

console.log(runningSum([1, 2, 3, 4]));

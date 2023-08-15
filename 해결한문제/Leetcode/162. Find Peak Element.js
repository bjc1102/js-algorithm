/**
 * @param {number[]} nums
 * @return {number}

 피크 엘리먼트 찾기.
 양 옆에 있는 것보다 크다.

 올라가서 피크찍고 내려온다
 오른쪽에 있는게 크거나 작을 수 있다
 오른쪽에 있는게 더 크다면 

 중요했던게 피크가 여러 개가 될 수 있다는 점이었다.
 예시를 보면 1 2 | 1 3 5 6 | 4

 1. 정답이 인덱스 1이 될 수도 있고 6이 될 수도 있다.
 2. 피크 엘리먼트는 
 */
function findPeakElement(nums) {
    let left = 0;
    let right = nums.length - 1;

    //이진탐색
    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        //오른쪽만 찾아보면 된다.
        //왼쪽 엘리먼트를 피크로 간주
        if (nums[mid] > nums[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}


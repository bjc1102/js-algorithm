var maxArea = function (height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const currentHeight = Math.min(height[left], height[right]);
    const width = right - left;
    const area = currentHeight * width;
    max = Math.max(max, area);

    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }

  return max;
};

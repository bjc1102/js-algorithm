/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 *
 *
 *
 *
 */
const multiply = function (num1, num2) {
  const check = Array(num1.length + num2.length).fill(0);

  // 뒤에서부터 곱셈을 해야한다
  for (let j = num2.length - 1; j >= 0; j--) {
    for (let i = num1.length - 1; i >= 0; i--) {
      const product = num1[i] * num2[j];
      // 어느 인덱스에 들어가야할까 첫 번쨰 인덱스가 아니라 마지막 인덱스로 들어가야한다
      const index =
        num1.length +
        num2.length -
        1 -
        (num1.length - 1 - i + num2.length - 1 - j);

      console.log(index);

      check[index] += product;
      //carry bit
      if (check[index] > 9) result[index - 1] += Math.floor(check[index] / 10);
      check[index] %= 10;
    }
  }

  while (check[0] === 0) check.shift();
  return check.length === 0 ? "0" : check.join("");
};

console.log(multiply("111", "111"));

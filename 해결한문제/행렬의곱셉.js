function solution(arr1, arr2) {
  //   const answer = Array.from({ length: arr1.length }, () =>
  //     Array.from({ length: arr2.length }, () => 0)
  //   );
  const answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let result = [];

    for (let j = 0; j < arr2[0].length; j++) {
      let elem = 0;
      // i, j자리에 곱셈의 합을 채워줘야함
      for (let k = 0; k < arr1[0].length; k++) {
        elem += arr1[i][k] * arr2[k][j];
      }
      result.push(elem);
    }
    answer.push(result);
  }

  return answer;
}

// function solution1(arr1, arr2) {
//   const newArr = [];

//   for (let i = 0; i < arr1.length; i++) {
//     let result = [];
//     for (let j = 0; j < arr2[0].length; j++) {
//       let elem = 0;
//       for (let k = 0; k < arr2.length; k++) {
//         // arr1[0].length도 가능.
//         elem += arr1[i][k] * arr2[k][j];
//       }
//       result.push(elem);
//     }
//     newArr.push(result);
//   }
//   return newArr;
// }

console.log(
  solution(
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ],
    [
      [3, 3],
      [3, 9],
    ]
  )
);
/**
 * 1 3 4
 * 4 2 1
 *
 *
 * 3 3
 * 3 3
 */

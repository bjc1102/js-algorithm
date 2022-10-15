function solution(survey, choices) {
  var answer = "";
  /*
    survey의 성격 유형이 주어지는데 
    왼쪽 성격 유형은 1~3 > 3 2 1로
    오른쪽 성격 유형은 5~7 > 1 2 3으로 점수가 매겨져있다
    
    나눠서 1이면..
    */
  //   const results = new Map([
  //     ["R", 0],
  //     ["T", 0],
  //     ["C", 0],
  //     ["F", 0],
  //     ["J", 0],
  //     ["M", 0],
  //     ["A", 0],
  //     ["N", 0],
  //   ]);

  const results = new Map();
  [("R", "T", "C", "F", "J", "M", "A", "N")].forEach((item) =>
    results.set(item, 0)
  );

  survey.forEach((v, index) => {
    const [char1, char2] = v.split("");
    // const sum = choices[index] % 4;
    // const cond = Math.floor(choices[index] / 4);

    // if (cond === 1) results.set(char2, results.get(char2) + sum);
    // else {
    //   results.set(char1, results.get(char1) + 4 - sum);
    // }
    if (v > 4) results.set(char2, results.get(B) + v - 4);
    else if (v < 4) indi.set(char1, results.get(A) + 4 - v);
  });

  const results_arr = [...results];
  for (let i = 0; i < results.size; i += 2) {
    if (results_arr[i][1] >= results_arr[i + 1][1]) answer += results_arr[i][0];
    else answer += results_arr[i + 1][0];
  }

  return answer;
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]));

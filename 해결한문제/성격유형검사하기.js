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

  /*
  너무 어렵게 푼거같다
  1~7의 경우를 나누는 부분에서도 나눈나머지 몫으로 계산해서 그 부분이 틀렸는지 아닌지 검증도 하고 어차피 덧셈을 했을 때 위 아래 똑같은 수식이 나왔따
  접근방식은 틀리지 않은거 같아 js로 구현하는 것에만 조금 더 집중하면 좋을거같다
  
  */

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

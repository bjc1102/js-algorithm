function solution1(s, t) {
  //문자열에서 각 문자가 t와 얼마나 떨어져있는지 최소거리를 출력

  // 자기 자신의 위치는 계산하지 않음
  // 하나는 왼쪽으로 하나는 오른쪽으로 가면서 가장 최소 위치를 찾는데 lt,rt의 값을
  // 비교하고 answer에 추가할 때 잘못됨

  let answer = "";
  const slen = s.length;

  for (let i = 0; i < slen; i++) {
    let lt = 0;
    console.log("----");
    for (let j = i + 1; j < slen; j++) {
      console.log(s[j]);
      if (s[j] === t) {
        answer += lt + " ";
        break;
      }
      lt++;
    }
    console.log("----");

    let rt = 0;
    console.log("----");

    for (let j = i - 1; j >= 0; j--) {
      console.log(s[j]);

      if (s[j] === t && rt < lt) {
        answer += rt + " ";
        break;
      }
      rt++;
    }
    console.log("----");
  }

  return answer;
}

function solution(s, t) {}
let str = "teachermode";
console.log(solution(str, "e"));

function compareMap(map1, map2) {
  // 우선 키의 사이즈가 같아야함
  if (map1.size !== map2.size) return false;
  // 종류가 같다면 실제 내용이 같은지 비교하기
  for (const [key, value] of map1) {
    //굳이 뺴는게 아니라 서로 같은 수인지만 비교하면 된다..
    if (!map2.has(key) || map2.get(key) !== value) return false;
  }
  return true;
}

function solution(s, t) {
  /*
    아나그램이 되는 부분문자열 갯수
    대소문자 구분
    
    문자 전체 탐색하면서 해쉬로 만들고 비교하기
    */
  let answer = 0;
  // hash map을 string이 아닌 target으로 만들어야한다...
  // rt를 돌리면서 --- 루틴 : rt를 추가했을 때 아나그램인지 체크
  // 체크하고 lt가 가리키는 키를 빼고 rt를 또 채워놓고 비교
  const th = new Map();
  const sh = new Map();
  const len = t.length - 1; // rt를 2부터 시작하게 하기 위함
  for (let x of t) {
    // t 해쉬맵 만들기
    if (th.has(x)) th.set(x, th.get(x) + 1);
    else th.set(x, 1);
  }

  for (let i = 0; i < len; i++) {
    // s 해쉬맵 슬라이딩 윈도우 돌기위해 만든다
    if (sh.has(s[i])) sh.set(s[i], sh.get(s[i]) + 1);
    else sh.set(s[i], 1);
  }

  let lt = 0;
  for (let rt = len; rt < s.length; rt++) {
    if (sh.has(s[rt])) sh.set(s[rt], sh.get(s[rt]) + 1);
    else sh.set(s[rt], 1);
    // 하나 추가하고 비교하기
    if (compareMap(sh, th)) answer++;

    // 2개 있으면 지우면 안되니 하나만 줄여주면되고
    sh.set(s[lt], sh.get(s[lt]) - 1);
    // 0이면 지워버린다
    if (sh.get(s[lt]) === 0) sh.delete(s[lt]);
    lt += 1;
  }

  // 내가 푼 풀이
  // 슬라이딩, 해쉬, 투포인트꺼지 전부 사용했다
  // 결국은 이중 for문으로 해결한거같다 n * m이라 n^2

  // let arr = [];
  // let answer = 0;
  // let lt = 0;
  // const stringLength = s.length; // 아나그램을 찾아야하는 문자열
  // const targetLength = t.length; // 특정 문자열

  // // rt를 계속 하나씩 옮기면서 비교
  // // 3 ~ 9까지는 2 ~ 8까지가 된다
  // for (let rt = targetLength; rt <= stringLength; rt++) {
  //   const map = new Map();
  //   for (let i = lt; i < rt; i++) {
  //     console.log(i);
  //     // lt부터 rt사이의 해쉬맵 만들기
  //     if (map.has(s[i])) map.set(s[i], map.get(s[i]) + 1);
  //     else map.set(s[i], 1);
  //   }

  //   let flag = true;
  //   for (let k = 0; k < targetLength; k++) {
  //     //만약 타겟이 없거나 0이라서 뺄 수가 없다면
  //     const num = map.get(t[k]);
  //     if (!map.has(t[k]) || num === 0) {
  //       flag = false;
  //       break;
  //     }
  //     map.set(t[k], num - 1);
  //   }
  //   if (flag) {
  //     arr.push(map);
  //     answer++;
  //   }
  //   lt += 1;
  // }

  return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log("정답은 : " + solution(a, b));

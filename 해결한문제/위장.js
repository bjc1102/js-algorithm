/**
 *
 * @param {string[][]} clothes
 * @returns
 *
 * 스파이 옷들이 주어지고 옷들의 조합을 통해 만들 수 있는 경우의 수를 전부 구해라
 * 안입을 수도 있고 2차원 배열의 0번 인덱스는 옷의 이름, 1번 인덱스는 종류이다
 * 일단 종류별로 hash테이블을 만들고 map으로도 반복문을 돌릴 수 있었던거같은데
 *
 * 굳이 DFS로 돌릴 필요가 없다. 옷의 가짓수를 곱해주면 되는 부분이었다.
 * 옷이 없는 경우를 어떻게 하면 좋을지 계속 고민했다..
 * 왜 생각못한진 모르겠지만..
 */

function solution(clothes) {
  let answer = 1;
  const hash = new Map();
  for (const [cloth, part] of clothes) {
    const tmp = hash.get(part);
    if (tmp !== undefined) hash.set(part, tmp + 1);
    else hash.set(part, 1);
  }

  for (const [x, num] of hash) {
    answer = answer * (num + 1);
  }

  //   function DFS(L) {
  //     if (L === len) {
  //       answer += 1;
  //     } else {
  //       for (let i = 0; i < arr[L].length; i++) {
  //         //안입는 경우..
  //         const cloth = arr[L][i] ?? "";
  //         check[L] = cloth;
  //         DFS(L + 1);
  //       }
  //     }
  //   }

  //   DFS(0);

  return answer - 1;
}

console.log(
  solution([
    ["crow_mask", "face"],
    ["blue_sunglasses", "face"],
    ["smoky_makeup", "face"],
  ])
);
s;

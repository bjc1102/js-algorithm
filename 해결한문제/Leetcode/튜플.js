/**
 *
 * @param {string} s
 * @returns
 *
 * 1) 데이터를 배열로 변경하고 {}를 자른다
 * 2) 길이 순으로 변경하고 해당 배열의 추가되는 원소가 튜플에 순서로 들어갈 친구다.
 *
 *
 * 문제는 금방 이해하고 구현해서 테스트 케이스를 돌려봤을 떄
 * 원소가 2자리 일때 즉 10 이상이 있을때 문제가 발생했다.
 *
 * 문자열을 파싱하는데 굉장히 오래 걸렸고 너무 길어지는게 보기 힘들어서 구글링해서 문자열 파싱한 부분만 가져왔다
 */

function solution(s) {
  let answer = [];
  // 처음과 끝을 잘라버리고 },{ 순서로 열린다는 특징을 가지고 문자열을 파싱했다.
  let strList = s.replace("{{", "").replace("}}", "").split("},{");
  const setList = [];
  for (let i = 0; i < strList.length; i++) {
    setList.push(strList[i].split(","));
  }
  setList.sort((a, b) => a.length - b.length);
  const check = new Map();

  for (let i = 0; i < setList.length; i++) {
    for (let j = 0; j < setList[i].length; j++) {
      // 튜플에 등록된 값이 아니라면
      const num = parseInt(setList[i][j]);
      if (check.get(num) !== 1) {
        check.set(num, 1);
        answer.push(num);
        break;
      }
    }
  }

  return answer;
}

console.log(solution("{{20,111},{111}}"));

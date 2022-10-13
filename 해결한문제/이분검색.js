function solution(target, arr) {
  /*
    이분검색이란 가운데를 잡아서 현재보다 크면 오른쪽 작으면 왼쪽으로
    계속해서 절반씩 나눠서 계산하는 알고리즘이다

    시간복잡도가 logN이다
    
    rt + lt를 실수로 rt - lt로 구현했고
    mid를 제외해야한다는 것을 놓쳐서 무한루프 걸렸다
  */
  let answer; // 몇번쨰 위치에 있는지 계산하기

  arr.sort((a, b) => a - b);

  console.log(arr);

  let lt = 0;
  let rt = arr.length - 1;

  while (lt <= rt) {
    // lt가 커지거나 rt가 작아지는 경우
    let mid = parseInt((rt + lt) / 2); //
    if (arr[mid] === target) {
      answer = mid + 1;
      break;
    }
    // 왼쪽에 있다, 미드값을 검사했으니 mid - 1을 한다
    else if (arr[mid] > target) rt = mid - 1;
    // 오른쪽에 있다. 미드 값을 검사했으니 mid + 1을 한다
    else lt = mid + 1;
  }

  console.log(arr);

  return answer;
}

let arr = [23, 87, 65, 12, 57, 77, 32, 99, 81];
console.log(solution(32, arr));

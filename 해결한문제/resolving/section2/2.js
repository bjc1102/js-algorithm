//1은 가위 2는 바위 3은 보

function solution(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === 1 && b[i] === 2) console.log("B");
    else if (a[i] === 2 && b[i] === 3) console.log("B");
    else if (a[i] === 3 && b[i] === 1) console.log("B");
    else if (a[i] === b[i]) console.log("D");
    else console.log("A");
  }
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));

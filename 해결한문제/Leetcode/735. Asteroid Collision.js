// /**
//  * @param {number[]} asteroids
//  * @return {number[]}

//  서로 다른 방향으로 움직이는 소행성은 충돌한다
//  충돌하게 되면 작은 쪽이 폭발, 같은 크기라면 둘다 폭발
//  같은 방향이 아니라면 계속 충돌한다
//  */
// var asteroidCollision = function(asteroids) {
//     if(asteroids.length < 1) return []
//     const stack = []
//     for(let i = 0; i < asteroids.length; i++) {
//         // 서로 방향이 다른게 있다면
//         if(stack.length < 1) stack.push(asteroids[i])
//         else {
//             let last = 0
//             while(stack.length > 0 && stack[stack.length - 1] * asteroids[i] < 0) {
//                 const lastAsteroid = stack[stack.length - 1]
//                 const newAsteroid = asteroids[i]
//                 if(Math.abs(lastAsteroid) <= Math.abs(newAsteroid)) last = stack.pop()
//                 else break;
//             }
//             if(Math.abs(last) === Math.abs)
//         }

//         console.log(stack)
//     }

//     return stack
// };

/*
이게 질문이 웃기다
소행성끼리 만난다고 생각하면 원의 궤적을 돌면서 서로 충돌할 것을 예샹하지만 그렇지 않다.
그냥 우리가 아는 2차원적인 xy축에서 직선으로 음,양으로 움직이는 것이다
따라서 왼쪽(음수)이 먼저 나오고 오른쪽(양수)이 나온다면 둘은 서로 충돌하지 않는게 된다. 
오로지 양수 다음 음수가 나오는 상황만 충돌이라고 가정한다

따라서 정답은 아래와 같다
*/

function asteroidCollision(asteroids) {
  const stack = [];

  for (let i = 0; i < asteroids.length; i++) {
    const asteroid = asteroids[i];
    console.log(stack);
    // 현재 운석이 양수인 경우 스택에 추가
    if (asteroid > 0) {
      stack.push(asteroid);
    } else {
      // 현재 운석이 음수이고 스택의 마지막보다 큰 경우 충돌 처리
      while (
        stack.length > 0 &&
        stack[stack.length - 1] > 0 &&
        stack[stack.length - 1] < Math.abs(asteroid)
      ) {
        stack.pop();
      }

      // 충돌 후 스택이 비어있거나, 마지막 운석이 음수인 경우 현재 운석 추가
      if (stack.length === 0 || stack[stack.length - 1] < 0) {
        stack.push(asteroid);
      }
      // 충돌 후 스택의 마지막 운석과 현재 운석이 같은 크기인 경우 둘 다 제거
      else if (stack[stack.length - 1] === Math.abs(asteroid)) {
        stack.pop();
      }
    }
  }

  return stack;
}

/*
 * @lc app=leetcode id=1678 lang=javascript
 *
 * [1678] Goal Parser Interpretation
 */

// @lc code=start
/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  //   let answer = "";
  //   for (let i = 0; i < command.length; i++) {
  //     const char = command[i];
  //     if (char !== "(") {
  //       answer += char;
  //       continue;
  //     }
  //     if (command[i + 1] === ")") {
  //       answer += "o";
  //       i += 1;
  //       continue;
  //     }
  //     answer += "al";
  //     i += 3;
  //   }
  //   return answer;

  return command.split("()").join("o").split("(al)").join("al");
};
// @lc code=end

/*
 * @lc app=leetcode id=208 lang=javascript
 *
 * [208] Implement Trie (Prefix Tree)
 *
 * Trie 자료구조를 사용한다
 */

// @lc code=start

var Trie = function () {
  this.trie = {};
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let curr = this.trie;

  for (const char of word) {
    if (curr[char] === undefined) {
      const newTrie = {};
      curr[char] = newTrie;
    }
    curr = curr[char];
  }
  //마지막 문자열인걸 체크해줘야 단어가 들어와 저장되었다는 걸 확인할 수 있다.
  curr["isEnd"] = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let curr = this.trie;
  //search는 완전일치
  for (const char of word) {
    if (curr[char] === undefined) return false;
    curr = curr[char];
  }

  //문자의 끝이라면?
  return curr["isEnd"] === true;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let curr = this.trie;
  //startsWith는 부분일치
  for (const char of prefix) {
    if (curr[char] === undefined) return false;
    curr = curr[char];
  }

  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

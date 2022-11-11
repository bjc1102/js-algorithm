/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 동형인지  확인한다
 *
 * 무슨말이냐 하면 암호화하는 방식처름 대응시키는 것이라고 생각하면 된다.
 *
 * 전부 새로운 문자열로 대치시켜버리면 동형이라고 판단하고 넘어간다
 */
var isIsomorphic = function (s, t) {
  const map = new Map();
  const tmap = new Map();

  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i]) && !tmap.has(t[i])) {
      // 둘다 없다면
      map.set(s[i], t[i]);
      tmap.set(t[i], s[i]);
    } else {
      if (map.get(s[i]) !== t[i] || tmap.get(t[i]) !== s[i]) return false;
    }
  }

  return true;
};

console.log(isIsomorphic("egg", "add"));

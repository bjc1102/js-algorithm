/**
 * @param {string} s
 * @return {number}
 *
 * 가장 긴 회문 문자열의 길이를 반환하기
 *
 * 현재 문자열을 파싱해서 만드는게 아니라 문자열 자체를 만들어야한다.
 *
 * 대소문자 구분
 */
var longestPalindrome = function (s) {
  const map = new Map();
  const maxArr = [];

  let answer = 0;

  for (const char of s) {
    if (map.has(char)) map.set(char, map.get(char) + 1);
    else map.set(char, 1);
  }

  console.log(map);

  for (const [char, value] of [...map]) {
    if (value % 2 === 0) answer += value; //짝수는 더한다
    else {
      answer += value - 1;
      maxArr.push(char);
    } // 홀수는 짝수로 만들어 더한다
  }

  return answer + (maxArr.length > 0 ? 1 : 0);
};

console.log(
  longestPalindrome(
    "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"
  )
);

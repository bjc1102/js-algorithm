/**
 * @param {string} s
 * @return {boolean}
 
 문자 한개를 삭제해도 회문을 만들 수 있는지

 착각한 부분이 있었다. 문자의 한 개가 아니라 한 문자를 선택해서 삭제하는 것
 즉 abdcdcba일때 d를 하나 삭제하는게 아니라 전체 d를 삭제하는 것

 */
var validPalindrome = function(s) {
    function isPalindrome(str, i, j) {
        while (i < j) {
            if (str[i] !== str[j]) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }

    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        //회문이 다를때만 확인하면 된다
        if (s[left] !== s[right]) {
            return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
        }
        left++;
        right--;
    }
    return true; 
};

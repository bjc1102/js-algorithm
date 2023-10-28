/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}

 flowerbed와 n이 주어질 때 n만큼의 꽃을 심을 수 있는지
 */
var canPlaceFlowers = function(flowerbed, n) {

    for(let i = 0; i < flowerbed.length; i++) {
        if(flowerbed[i - 1] !== 1 && flowerbed[i] !== 1 && flowerbed[i+1] !== 1) {
            flowerbed[i] = 1
            n-=1
        }
        // n이 0일 때 통과되지 않기 때문에 0보다 작다면...
        if(n <= 0) return true
    }

    return false
};

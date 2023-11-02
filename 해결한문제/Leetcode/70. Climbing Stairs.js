var climbStairs = function(n) {
    if (n === 1) return 1;
    if (n === 2) return 2; 

    const dy = [1, 2]; 

    for (let i = 2; i < n; i++) {
        dy[i] = dy[i - 1] + dy[i - 2];
    }

    return dy[n - 1];
};

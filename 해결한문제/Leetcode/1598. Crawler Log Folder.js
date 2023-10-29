/**
 * @param {string[]} logs
 * @return {number}

 파일 작업을 수행하고 로그를 남긴다고 한다
 이때 main folder로 돌아가기 위해선 몇번의 작업을 수행해야 하는지
 */
var minOperations = function(logs) {
    let dep = 0

    for(const log of logs) {
        if(log === "./") continue;
        if(log === "../") {
            if(dep > 0) dep -= 1
        } else {
            dep += 1;
        }
    }

    return dep
};

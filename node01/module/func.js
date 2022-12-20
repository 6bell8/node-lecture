const e = require("express");
const { odd, even } = require("./var");
function check(num) {
  if (num % 2 === 0) {
    return even;
  } else {
    return odd;
  }
}

module.exports = check;

console.log(check(5));

//node js 에서는 require()함수를 통해 외부에 있는 변수를 가지고 올 수 있다.
//module.exports = 모듈명
//module.exports = {모듈명, 모듈명} //여러개를 내보낼 수 있음

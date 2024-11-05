// function sum(n) {
//   let ans = 0;
//   for (let i = 0; i < n.length; i++) {
//     ans = ans + i;
//   }
//   return ans;
// }
// const ans = sum(10);
// console.log(ans);

// function sum(n) {
// 	let ans = 0;
// 	for (let i = 1; i <= n; i++) {
// 		ans = ans + i
// 	}
// 	return ans;
// }

// const ans1 = sum(100);
// console.log(ans1);
// const ans2 = sum(1000);
// console.log(ans2);
// const ans3 = sum(10000);
// console.log(ans3);

//

const fs = require("fs");

const contents = fs.readFileSync("a.txt", "utf-8");

console.log(contents);
	nc 
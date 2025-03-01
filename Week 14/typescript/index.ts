// function sum(a: number, b: number): number {
//   return a + b;
// }

// let ans = sum(1, 4);
// console.log(ans);

function delayedCall(fn: () => void) {
  setTimeout(fn, 3000);
}

delayedCall(() => {
  console.log("hi there");
});

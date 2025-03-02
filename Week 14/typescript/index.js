"use strict";
// function sum(a: number, b: number): number {
//   return a + b;
// }
let user = {
    name: "sachin",
    age: 17,
    address: {
        city: "pune",
        country: "india",
        pincode: 411045,
    },
};
function islegalToVote(user) {
    if (user.age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
let ans = islegalToVote(user);
console.log(ans);

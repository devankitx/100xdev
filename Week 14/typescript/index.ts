// function sum(a: number, b: number): number {
//   return a + b;
// }

// let ans = sum(1, 4);
// console.log(ans);

// function delayedCall(fn: () => void) {
//   setTimeout(fn, 3000);
// }

// delayedCall(() => {
//   console.log("hi there");
// });
interface User {
  name: string;
  age: number;
  address?: {
    city: string;
    country: string;
    pincode: number;
  };
}
let user: User = {
  name: "sachin",
  age: 17,
  address: {
    city: "pune",
    country: "india",
    pincode: 411045,
  },
};
let user2: User = {
  name: "sachin",
  age: 17,
};

function islegalToVote(user: User): boolean {
  if (user.age >= 18) {
    return true;
  } else {
    return false;
  }
}

let ans = islegalToVote(user);
console.log(ans);

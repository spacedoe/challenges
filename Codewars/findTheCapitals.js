// CODEWARS: Find the Capitals
// https://www.codewars.com/kata/53573877d5493b4d6e00050c

// ["The capital of Maine is Augusta", "The capital of Spain is Madrid"]

// the structure of the object is not the same, sometimes state, sometimes country

// use .map() to change an object into an array

//Steps:
//1. map over capitals
//2. for every objects inside capitals check if has the key 'country' or 'state'
//3. get the value of key that exists and replace the objects with a string that says 'the capital of x is y'
//4. return the array that map created


const mixed_capitals = [
  { state: "Maine", capital: "Augusta" },
  { country: "Spain", capital: "Madrid" },
];

// My solution: 
// function capital(capitals) {
//   return capitals.map((capital) =>
//     capital.state
//       ? `The capital of ${capital.state} is ${capital.capital}`
//       : `The capital of ${capital.country} is ${capital.capital}`
//   );
// }

// capital(mixed_capitals)
// console.log(capital(mixed_capitals));


//Solution 2:
// function capital(capitals) {
//  const array = capitals.map((pair) => {
//     const key = pair.state ? "state" : "country"
//     return `The capital of ${pair[key]} is ${pair.capital}`
//  });
//     return array
//   }

// capital(mixed_capitals)
// console.log(capital(mixed_capitals));


//Solution 3:
// function capital(capitals) {
//   const array = capitals.map((capital) => {
//   return `The capital of ${capital.country || capital.state} is ${capital.capital}`;
// })
//   return array
// }

// capital(mixed_capitals)
// console.log(capital(mixed_capitals));


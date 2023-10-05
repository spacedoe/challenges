import { createServer } from "node:http";
import Chance from "chance";


const chance = new Chance();

const name = chance.name()
const age = chance.age({type: 'adult'})
const profession = chance.profession({rank: true})

export const server = createServer((request, response) => {
  response.statusCode = 200;
  response.end(`Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.`);
});

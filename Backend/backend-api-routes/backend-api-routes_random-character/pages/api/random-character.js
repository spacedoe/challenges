import Chance from "chance";

const chance = new Chance();

const character = {
  name: chance.name(),
  age: chance.age({ type: "adult" }),
  city: chance.city(),
  company: chance.company(),
  profession: chance.profession(),
  email: chance.email(),
  twitter: chance.twitter(),
  geohash: chance.geohash(),
};

export default function handler(request, response) {
  response.status(200).json(character);
}

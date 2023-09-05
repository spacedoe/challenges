const students = [
  {
    id: 1,
    firstName: "Jane",
    lastName: "Doe",
    age: 21,
  },
  {
    id: 2,
    firstName: "John",
    lastName: "Doe",
    age: 18,
  },
  {
    id: 3,
    firstName: "Max",
    lastName: "Mustermann",
    age: 32,
  },
  {
    id: 4,
    firstName: "Erika",
    lastName: "Musterfrau",
    age: 38,
  },
  {
    id: 5,
    firstName: "Luke",
    lastName: "Skywalker",
    age: 23,
  },
];
export function getFirstNames(people) {
  return people.map((person) => person.firstName);
}
// console.log(getFirstNames(students));

export function getFullNames(people) {
  return people.map((person) => `${person.firstName} ${person.lastName}`);
}
// console.log(getFullNames(students));

export function getNameAndAge(people) {
  return people.map((person) => `${person.lastName} (${person.age})`);
}
// console.log(getNameAndAge(students))

export function getPeopleByAge(people, age) {
  return people.filter((person) => person.age === age);
}
// console.log(getPeopleByAge(students, 23));

export function getPeopleNamesOlderThan(people, age) {
  return people
    .filter((person) => person.age > age)
    .map((person) => `${person.firstName} ${person.lastName}`);
}
// console.log(getPeopleNamesOlderThan(students, 35));

export function getPeopleByLastName(people, lastName) {
  return people.filter((person) => person.lastName === lastName);
}
// console.log(getPeopleByLastName(students, "Doe"));

export function findPersonById(people, id) {
  return people.find((person) => person.id === id);
}
// console.log(findPersonById(students, 5));

export function isAnyoneOlderThan(people, age) {
  return people.some((person) => person.age > age);
}

// console.log(isAnyoneOlderThan(students, 20));

export function getFullNamesSortedByAge(people) {
  return people
    .sort((a, b) => a.age - b.age)
    .map((person) => `${person.firstName} ${person.lastName}`);
}
console.log(getFullNamesSortedByAge(students));
// let data;
// let data = null;
// let data = 25;
// let data = 'hello world!'
// let data = false
// let data = BigInt(9007199254740991);
// let data = function(){};
// let data = [1, 2, 3];

let data = {
    name: 'Alex',
    age: 35
}

const typeOfData = typeof data;

console.log(typeOfData);

switch (typeOfData) {
  case "number":
  case "string":
  case "undefined":
  case "boolean":
  case "function":
  case "bigint":
    message = typeOfData + "!";
    break;

  case "object":
    if (Array.isArray(data)) {
      message = "array!";
    } else if (data === null) {
      message = "null!";
    } else {
      message = typeOfData + "!";
    }
    break;

  default:
    message = "I have no idea!";
}


if (typeOfData === "number" || typeOfData === "bigint") {
  messageIsNumber = typeOfData + " is a number!";
} else {
  messageIsNumber = typeOfData + " is not a number!";
}

console.log(message);
console.log(messageIsNumber);

console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch("https://swapi.dev/api/people");
    if (!response.ok) {
      console.log("Bad response");
    } else {
      console.log("Great, the fetch worked!");
      const data = await response.json();
      //   console.log(data);
      
      const characters = data.results;
      //   console.log(characters)

      // Get all the characters names:
      const characterNames = characters.map((character) => character.name);
      // console.log(characterNames);

      // Get R2-D2 eye color
      const r2d2 = characters.find((character) => character.name === "R2-D2");
      const eyeColour = r2d2.eye_color;
      console.log(eyeColour);
    }
  } catch (e) {
    console.log(e);
  }
}

fetchData();

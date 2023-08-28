console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

//When we don't pass parameter ,the default value is 0.
function renderStars(filledStars = 0) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
  for (let i = 1; i <= 5; i++) {
    const newStar = document.createElement("img");

    //the only case of i > filledStars is when filledStars = 0;
    if (i <= filledStars) {
      newStar.src = "assets/star-filled.svg";
    } else {
      newStar.src = "assets/star-empty.svg";
    }

    newStar.addEventListener("click", () => {
      renderStars(i);
    });
    starContainer.append(newStar);
    console.log(newStar);
  }
}

//--^-- your code here --^--

renderStars();

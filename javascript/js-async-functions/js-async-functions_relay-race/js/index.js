console.clear();

const runner1 = document.querySelector('[data-js="runner"]:nth-of-type(1)');
const runner2 = document.querySelector('[data-js="runner"]:nth-of-type(2)');
const runner3 = document.querySelector('[data-js="runner"]:nth-of-type(3)');

const startRaceButton = document.querySelector('[data-js="start-race-button"]');

// You'll need to change something about this callback function:
//                                         ↙️
startRaceButton.addEventListener("click", () => {
  startRaceButton.setAttribute("disabled", "");

  /**
   * Hint 1:
   * The relay runners are already available in the global scope as `runner1`,
   * `runner2` and `runner3`.
   *
   * Hint 2:
   * Use `animateRunner(runnerX)` to animate the runners.
   *
   * Hint 3:
   * The `animateRunner` function returns a promise which resolves when the animation is done.
   **/

  // --v-- write your code here --v--
  async function animateRace() {
    try {
      const value1 = await animateRunner(runner1);
      const value2 = await animateRunner(runner2);
      const value3 = await animateRunner(runner3);
      console.log(value1, value2, value3)
    } catch (error) {
      console.error(error);
    } finally {
      console.log('Race is complete!');
    }
  }
  animateRace()

  //Alternative solution: to put async direclty in the anomymous function in the event listerner, then apply code below:
  // await animateRunner(runner1);
  // await animateRunner(runner2);
  // await animateRunner(runner3);

  // --^-- write your code here --^--

  startRaceButton.removeAttribute("disabled");
});

/**
 * This is a wrapper around the Web Animations API
 * that allows us to use async/await to animate a ball.
 * It returns a promise that resolves when the animation is finished.
 */
function animateRunner(runnerElement) {
  return runnerElement.animate(
    [{ translate: "0 0" }, { translate: "180px 0" }],
    { duration: 2000, fill: "forwards" }
  ).finished;
}

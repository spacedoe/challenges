import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("renders player information and two buttons", () => {
  const name = "Tanya";
  const score = 45;
  const onDecreasePlayerScore = jest.fn();
  const onIncreasePlayerScore = jest.fn();

  render(
    <Player
      name={name}
      score={score}
      onDecreasePlayerScore={onDecreasePlayerScore}
      onIncreasePlayerScore={onIncreasePlayerScore}
    />
  );
  const PlayerName = screen.getByText("Tanya");
  const PlayerScore = screen.getByText("45");
  const button = screen.getAllByRole("button");

  expect(PlayerName).toBeInTheDocument();
  expect(PlayerScore).toBeInTheDocument();
  expect(button).toHaveLength(2);
});

test("calls callbacks when increasing or decreasing score", async () => {

  const onDecrease = jest.fn();
  const onIncrease = jest.fn();

  const user = userEvent.setup();

  render(
    <Player
      onDecreasePlayerScore={onDecrease}
      onIncreasePlayerScore={onIncrease}
    />
  );

  const decreseScoreButton = screen.getByText("-")
  const increaseScoreButton = screen.getByText("+")

  await user.click(decreseScoreButton)
  await user.click(increaseScoreButton)
  await user.click(increaseScoreButton)

  expect(onDecrease).toHaveBeenCalledTimes(1)
  expect(onIncrease).toHaveBeenCalledTimes(2)


  

});

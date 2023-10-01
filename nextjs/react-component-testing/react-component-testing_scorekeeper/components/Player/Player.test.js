import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("renders player information and two buttons", () => {
  render(<Player name="John" score={10} />);

  const player = screen.getByText("John");
  expect(player).toBeInTheDocument();

  const score = screen.getByText(/10/);
  expect(score).toBeInTheDocument();

  const buttons = screen.getAllByRole("button");
  expect(buttons).toHaveLength(2);
});

test("calls callbacks when increasing or decreasing score", async () => {
  const user = userEvent.setup();

  const onDecrease = jest.fn();
  const onIncrease = jest.fn();

  render(
    <Player
      name="John"
      score={10}
      onDecreasePlayerScore={onDecrease}
      onIncreasePlayerScore={onIncrease}
    />
  );

  const decreseButton = screen.getByRole("button", {name: "Decrease Score"});
  const increaseButton = screen.getByRole("button", {name: "Increase Score"});

  await user.click(decreseButton);
  await user.click(increaseButton);
  await user.click(increaseButton);

  expect(onDecrease).toHaveBeenCalledTimes(1);
  expect(onIncrease).toHaveBeenCalledTimes(2);
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("renders two input fields and a button", () => {
  render(<GameForm />);

  const input = screen.getAllByRole("textbox");
  const button = screen.getByRole("button", { name: "Create game" });

  expect(input).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("renders a form with the accessible name 'Create a new game'", () => {
  render(<GameForm />);
  const formName = screen.getByRole("form", { name: "Create a new game" });
  expect(formName).toBeInTheDocument();
});

test("submits the correct form data when every field is filled out", async () => {
  const onCreateGame = jest.fn();
  const user = userEvent.setup();

  render(<GameForm onCreateGame={onCreateGame} />);

  const gameName = screen.getByRole("textbox", { name: "Name of game" });
  const playersName = screen.getByRole("textbox", {
    name: "Player names, separated by comma",
  });

  const button = screen.getByRole("button", { type: "submit" });

  await user.type(gameName, "New game");
  await user.type(playersName, "John, Mary");
  await user.click(button);

  expect(onCreateGame).toHaveBeenCalledWith({
    nameOfGame: "New game",
    playerNames: ["John", "Mary"],
  });
});

test("does not submit form if one input field is left empty", async () => {
  const onCreateGame = jest.fn();
  const user = userEvent.setup();

  render(<GameForm onCreateGame={onCreateGame} />);

  const gameName = screen.getByRole("textbox", { name: "Name of game" });

  const button = screen.getByRole("button", { type: "submit" });

  await user.type(gameName, "New game");

  await user.click(button);

  expect(onCreateGame).not.toHaveBeenCalled();
});

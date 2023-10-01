import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  render(
    <Input
      labelText="Name of game"
      placeholder="e.g. Dodelido"
      name="nameOfGame"
    />
  );

  const inputField = screen.getByLabelText("Name of game");
  expect(inputField).toBeInTheDocument();
  expect(inputField).toHaveAttribute("placeholder", "e.g. Dodelido");
});

test("calls callback on every user input", async () => {
  const mockFunction = jest.fn();
  const user = userEvent.setup();

  render(
    <Input
      labelText="Name of game"
      placeholder="e.g. Dodelido"
      name="nameOfGame"
      onChange={mockFunction}
    />
  );
  const inputField = screen.getByLabelText("Name of game");

  await user.type(inputField, "John");

  expect(mockFunction).toHaveBeenCalledTimes(4);
});

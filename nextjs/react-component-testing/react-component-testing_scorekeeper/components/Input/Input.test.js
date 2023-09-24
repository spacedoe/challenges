import { getByPlaceholderText, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  //   const name = "nameOfGame";
  //   const labelText = "Name of Game";
  //   const placeholder = "e.g. Dodelido";

  const name = "playerNames";
  const labelText = "Player names, separated by comma";
  const placeholder = "e.g. John Doe, Jane Doe";
  const required = true;

  render(
    <Input
      labelText={labelText}
      placeholder={placeholder}
      name={name}
      type="text"
      required={required}
    />
  );

  const labelElement = screen.getByText(labelText);
  const inputElement = screen.getByPlaceholderText(placeholder);

  expect(labelElement).toBeInTheDocument();
  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toHaveAttribute("name", name);
  expect(inputElement).toHaveAttribute("required");
  expect(inputElement).toHaveAttribute("type", "text");
});

test("calls callback on every user input", async () => {
  const onChange = jest.fn();
  const user = userEvent.setup();

  
  const placeholder = "e.g. John Doe, Jane Doe";
  render(<Input placeholder={placeholder} onChange={onChange} />);
  const input = screen.getByPlaceholderText(placeholder);

  await user.type(input, "John");

  expect(onChange).toHaveBeenCalledTimes(4);
});

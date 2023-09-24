import { render, screen } from "@testing-library/react";
import Navigation from ".";
import userEvent from "@testing-library/user-event";

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: jest.fn() };
  },
}));

test("renders with two links 'Play' and 'History'", async () => {
  render(<Navigation />);

  const link1 = screen.getByRole("link", { name: "Play" });
  const link2 = screen.getByRole("link", { name: /history/i });

 
  expect(link1).toBeInTheDocument()
  expect(link2).toBeInTheDocument()
  
 
  
});

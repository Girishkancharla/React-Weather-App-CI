import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Weather Outlook header", () => {
  render(<App />);
  const headingElement = screen.getByRole("heading", {
    name: /weather outlook/i,
  });
  expect(headingElement).toBeInTheDocument();
});

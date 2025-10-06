import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders to-do list header", () => {
  render(<App />);
  const headerElement = screen.getByText(/to-do list/i);
  expect(headerElement).toBeInTheDocument();});
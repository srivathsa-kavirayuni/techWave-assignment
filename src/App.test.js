import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "./App";

test("when clicks on toggle switch called good", async () => {
  render(<App />);
  await userEvent.click(screen.getByTestId("good"));

  expect(screen.getByTestId("toggleResult")).toHaveTextContent(
    "You Have Activated"
  );
});

test("when clicks on 2 toggle switches called good, fast", async () => {
  render(<App />);
  await userEvent.click(screen.getByTestId("good"));
  await userEvent.click(screen.getByTestId("fast"));

  expect(screen.getByTestId("toggleResult")).toHaveTextContent(
    "You Have Activated fast,"
  );
});

test("when clicks on toggle switch twice called good", async () => {
  render(<App />);
  await userEvent.click(screen.getByTestId("good"));
  await userEvent.click(screen.getByTestId("good"));

  expect(screen.getByTestId("toggleResult")).toHaveTextContent(
    "You Have Activated good,"
  );
});

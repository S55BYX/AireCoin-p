import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";

import Main from "../Main";

test("Main app renders", async () => {
  render(
    <Router>
      <Main />
    </Router>
  );
  const items = await screen.findAllByTestId("main-page");
  expect(items).toHaveLength(1);
});

test("Cards are rendered", async () => {
  render(
    <Router>
      <Main />
    </Router>
  );
  const items = await screen.findAllByTestId("cards");
  expect(items).toHaveLength(1);
});
test("Stats are rendered", async () => {
  render(
    <Router>
      <Main />
    </Router>
  );
  const items = await screen.findAllByTestId("stats");
  expect(items).toHaveLength(1);
});
test("Heading renders", async () => {
  render(
    <Router>
      <Main />
    </Router>
  );
  const linkElement = screen.getByText(/Learn how to use AireCoin/i);
  expect(linkElement).toBeInTheDocument();
});
test("Transaction Stats renders", async () => {
  render(
    <Router>
      <Main />
    </Router>
  );
  const linkElement = screen.getByText(/Transactions/i);
  expect(linkElement).toBeInTheDocument();
});

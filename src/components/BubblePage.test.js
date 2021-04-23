import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { fetchBubbles } from '../helpers/mockApiCall';

// Building mock function
jest.mock('../helpers/mockApiCall')

const testBubbles = {
  data: [
    {
      color: "aliceblue",
      code: {
        hex: "#f0f8ff",
      },
      id: 1,
    }
  ]
}



test("Renders BubblePage without errors", () => {
  // Finish this test
  render(<BubblePage />)
});

test("Fetches data and renders the bubbles on mounting", async () => {
  // Finish this test
  fetchBubbles()
  render(<BubblePage />)

  const colorAwait = await screen.findByText(/bubbles/i)
  expect(colorAwait).toBeInTheDocument()
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading
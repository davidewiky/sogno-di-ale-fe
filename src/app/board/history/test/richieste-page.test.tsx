import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HistoryPage from "../page";

describe("richieste page", () => {
  it("expect to render text", () => {
    expect.hasAssertions();
    render(<HistoryPage />);
    const element = screen.getByText("RICHIESTE");
    expect(element).toBeInTheDocument();
  });
});

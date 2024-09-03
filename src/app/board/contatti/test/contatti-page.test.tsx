import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ContattiPage from "../page";

describe("contatti page", () => {
  it("expect to render text", () => {
    expect.hasAssertions();
    render(<ContattiPage />);
    const element = screen.getByText("CONTATTI");
    expect(element).toBeInTheDocument();
  });
});

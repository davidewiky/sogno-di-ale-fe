import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ImpostazioniPage from "../page";

describe("impostazioni page", () => {
  it("expect to render text", () => {
    expect.hasAssertions();
    render(<ImpostazioniPage />);
    const element = screen.getByText("IMPOSTAZIONI");
    expect(element).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import WorksPage from "../page";

describe("degenti page", () => {
  it("expect to render text", () => {
    expect.hasAssertions();
    render(<WorksPage />);
    const element = screen.getByText("PAZIENTI RICOVERATI");
    expect(element).toBeInTheDocument();
  });
});

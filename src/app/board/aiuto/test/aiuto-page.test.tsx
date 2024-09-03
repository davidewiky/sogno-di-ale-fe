import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AiutoPage from "../page";

describe("aiuto page", () => {
  it("expect to render text", () => {
    expect.hasAssertions();
    render(<AiutoPage />);
    const element = screen.getByText("AIUTO");
    expect(element).toBeInTheDocument();
  });
});

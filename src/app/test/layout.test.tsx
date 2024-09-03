import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import RootLayout from "../layout";

describe("app root", () => {
  it("expect to render layout", () => {
    render(
      <RootLayout>
        <div data-testid="layout-content" />
      </RootLayout>,
    );
    const button = screen.getByTestId("layout-content");
    expect(button).toBeInTheDocument();
  });
});

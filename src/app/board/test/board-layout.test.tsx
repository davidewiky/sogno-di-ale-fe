import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import BoardLayout from "../layout";

describe("board layout", () => {
  it("expect to render header", () => {
    render(
      <BoardLayout>
        <div />
      </BoardLayout>,
    );
    const header = screen.getByTestId("board-header");
    expect(header).toBeInTheDocument();
  });
});

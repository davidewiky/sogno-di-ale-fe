import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { SignOutButton } from "../sign-out-button";
import * as Module from "~/utils/auth/sign-out";

describe("sign out button", () => {
  it("expect to call signOut method", () => {
    expect.hasAssertions();
    const spy = vi.spyOn(Module, "signOut").mockImplementation(
      vi.fn(() => {
        return new Promise<void>((resolve) => {
          resolve();
        });
      }),
    );
    render(<SignOutButton signOut={Module.signOut} />);
    const button = screen.getByTestId("signout-button");
    expect(button).toBeInTheDocument();
    button.click();
    expect(spy).toHaveBeenCalledWith();
  });
});

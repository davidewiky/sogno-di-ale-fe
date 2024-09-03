import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import type * as navigation from "next/navigation";
import AuthPage from "../page";
import type { AuthResponse } from "../auth-form";
import { AuthForm } from "../auth-form";

vi.mock("next/navigation", async (importOriginal) => {
  const actual = await importOriginal<typeof navigation>();
  return {
    ...actual,
    useRouter: vi.fn(() => ({
      replace: vi.fn(),
    })),
  };
});

vi.mock("../../../lib/crypto/crypto.ts", async (importOriginal) => {
  const actual = await importOriginal<typeof navigation>();
  return {
    ...actual,
    decryptAesKeyWithRsa: vi.fn(),
  };
});

describe("auth page", () => {
  it("expect to render auth form", () => {
    render(<AuthPage />);
    const button = screen.getByTestId("submit-auth-button");
    expect(button).toBeInTheDocument();
  });

  it("auth form behavior", () => {
    const mockEmail = "email@email.com";
    const mockPassword = "Qwerty1234!";
    const mockHandleSubmit = vi.fn().mockImplementation(() => {
      return new Promise<AuthResponse>((resolve) => {
        resolve({
          token: "token",
          aes: "aesKey",
          message: "success",
          redirectUrl: "url",
        });
      });
    });

    render(<AuthForm handleSubmit={mockHandleSubmit} />);
    const email = within(screen.getByTestId("email-input")).getByRole(
      "textbox",
    );
    const password = within(
      screen.getByTestId("password-input"),
    ).getByPlaceholderText("Password");
    const button = screen.getByTestId("submit-auth-button");

    fireEvent.input(email, { target: { value: mockEmail } });
    expect(button).toBeDisabled();
    fireEvent.input(password, { target: { value: mockPassword } });
    expect(button).not.toBeDisabled();
    const showPasswordButton = within(
      screen.getByTestId("password-input"),
    ).getByRole("button");
    fireEvent.click(showPasswordButton);
    expect(password).toHaveAttribute("type", "text");
    fireEvent.click(button);

    expect(mockHandleSubmit).toHaveBeenCalledTimes(1);
    expect(mockHandleSubmit).toHaveBeenCalledWith(
      expect.objectContaining({ username: mockEmail, password: mockPassword }),
    );
  });

  it("handleSubmit message should display error message", async () => {
    const errorMessage = "error message";
    const handleSubmit = () => {
      return new Promise<AuthResponse>((resolve) => {
        resolve({
          token: "token",
          aes: "aesKey",
          message: errorMessage,
          redirectUrl: "/url/",
        });
      });
    };
    render(<AuthForm handleSubmit={handleSubmit} />);
    const email = within(screen.getByTestId("email-input")).getByRole(
      "textbox",
    );
    const password = within(
      screen.getByTestId("password-input"),
    ).getByPlaceholderText("Password");
    const button = screen.getByTestId("submit-auth-button");

    fireEvent.input(email, { target: { value: "AAAA" } });
    fireEvent.input(password, { target: { value: "BBB" } });

    fireEvent.click(button);
    await waitFor(() => {
      const alert = screen.getByTestId("error-message");
      expect(alert).toHaveTextContent(errorMessage);
    });
  });
});

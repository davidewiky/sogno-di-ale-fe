import { screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import BoardPage from "../page";
import { renderWithProviders } from "~TEST/render-with-providers";

describe("board page", () => {
  it("expect to render the news", async () => {
    renderWithProviders(<BoardPage />);
    expect(screen.getByText("Notizie e comunicazioni")).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText("Title news1")).toBeInTheDocument();
    });
    expect(screen.getByText("content news 1")).toBeInTheDocument();
  });
  it("expect to render the faqs", async () => {
    renderWithProviders(<BoardPage />);
    expect(screen.getByText("Aiuto e contatti")).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText("Title Faq1")).toBeInTheDocument();
    });
    expect(screen.getByText("content faq 1")).toBeInTheDocument();
  });
});

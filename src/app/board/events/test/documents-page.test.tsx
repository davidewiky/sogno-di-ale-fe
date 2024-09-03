import { fireEvent, screen, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import EventsPage from "../page";
import { renderWithProviders } from "~TEST/render-with-providers";

describe("documents page", () => {
  it("expect to render patient list", async () => {
    renderWithProviders(<EventsPage />);

    await waitFor(() => {
      expect(screen.getByText("Luca Verdi")).toBeInTheDocument();
    });
    expect(screen.getAllByTestId("gender-label")[0]).toHaveTextContent("M");
    expect(screen.getByText("04.04.1995 (29 anni)")).toBeInTheDocument();
    expect(screen.getByText("Via Lugano 4F")).toBeInTheDocument();
    expect(screen.getByText("Paola Bianchi")).toBeInTheDocument();
  });

  it("expect to render document list when click on patient item", async () => {
    renderWithProviders(<EventsPage />);

    await waitFor(() => {
      expect(screen.getByText("Luca Verdi")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText("Luca Verdi"));

    expect(screen.getByText("Inviato tramite EocNet")).toBeVisible();
    expect(screen.getByText("Test File 1")).toBeVisible();
    expect(screen.getByText("Test messaggio")).toBeVisible();
    expect(screen.getByText("Test File 2")).toBeVisible();
  });

  //TODO: modify expect mock src iframe
  it("expect to render the previewer document when click on a document", async () => {
    renderWithProviders(<EventsPage />);

    await waitFor(() => {
      expect(screen.getByText("Luca Verdi")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText("Luca Verdi"));
    fireEvent.click(screen.getByText("Test File 1"));

    expect(screen.getByTestId("preview-document")).toBeInTheDocument();
    expect(screen.getByTestId("preview-document")).toHaveAttribute(
      "src",
      "https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf#toolbar=0",
    );
  });
});

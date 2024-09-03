import { beforeEach, afterEach, describe, expect, it, vi } from "vitest";
import { calculatePatientAge } from "~/app/board/utils/age-calculator";

describe("age calculator", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("should return age in days", () => {
    const date = new Date(2000, 0, 3, 12);
    vi.setSystemTime(date);
    const result = calculatePatientAge("01.01.2000");
    expect(result).toBe("2 giorni");
  });

  it("should return age in months", () => {
    const date = new Date(2000, 3, 3, 12);
    vi.setSystemTime(date);
    const result = calculatePatientAge("01.01.2000");
    expect(result).toBe("3 mesi");
  });

  it("should return age in years", () => {
    const date = new Date(2005, 3, 3, 12);
    vi.setSystemTime(date);
    const result = calculatePatientAge("01.01.2000");
    expect(result).toBe("5 anni");
  });

  it("should return age in years with decease date", () => {
    const result = calculatePatientAge("01.01.2000", "01.01.2004");
    expect(result).toBe("4 anni");
  });
});

import { afterAll, afterEach, beforeAll, vi } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { setupServer } from "msw/node";
import { handlers } from "./mocks/handlers";

export const server = setupServer(...handlers);

vi.mock("next/headers", () => ({
  cookies: () => {
    return {
      get: vi.fn(),
      set: vi.fn(),
      delete: vi.fn(),
    };
  },
}));

vi.mock("next/font/google", () => ({
  IBM_Plex_Sans: vi.fn(() => ({
    style: {},
  })),
}));

beforeAll(() => {
  server.listen();
  if (typeof URL.createObjectURL === "undefined") {
    URL.createObjectURL = vi.fn();
  }
});

afterEach(() => {
  server.resetHandlers();
  cleanup();
});

afterAll(() => {
  server.close();
});

vi.mock("next/navigation", () => ({
  usePathname: () => "/board/",
  useRouter: () => ({
    route: "/",
    pathname: "/",
    query: {},
    asPath: "/",
  }),
  useServerInsertedHTML: () => ({}),
}));

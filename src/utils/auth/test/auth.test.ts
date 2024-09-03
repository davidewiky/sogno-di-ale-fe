import { describe, expect, it, vi } from "vitest";
import * as navigation from "next/navigation";
import { http, HttpResponse } from "msw";
import { signIn } from "../sign-in";
import { signOut } from "../sign-out";
import { authRoute } from "~/routes";
import { server } from "~TEST/setup";

vi.mock("next/navigation", async (importOriginal) => {
  const actual = await importOriginal<typeof navigation>();
  return {
    ...actual,
    redirect: vi.fn(),
  };
});

describe("auth functions", () => {
  it("signIn should call api", async () => {
    const successResponse = await signIn({
      username: "email@email.it",
      password: "AAAA",
      publicKey: "KeyAAAA",
    });
    expect(successResponse).toStrictEqual({
      aes: "aesKeyTest",
      message: "success",
      redirectUrl: "/board",
      token: "tokenTest",
    });
  });

  it("signIn should throw error if call api return error", async () => {
    server.use(
      http.post("*/api/auth/login", () => {
        return new HttpResponse(null, {
          status: 401,
          statusText: "UNAUTHORIZED",
        });
      }),
    );

    const errorResponse = await signIn({
      username: "email@email.it",
      password: "AAAA",
      publicKey: "KeyAAAA",
    });

    expect(errorResponse).toStrictEqual({
      message: "L'utente non è autorizzato",
    });
  });

  it("signOut should redirect", async () => {
    const redirectSpy = vi.spyOn(navigation, "redirect");
    await signOut();
    expect(redirectSpy).toHaveBeenCalledWith(
      authRoute,
      navigation.RedirectType.replace,
    );
  });
});

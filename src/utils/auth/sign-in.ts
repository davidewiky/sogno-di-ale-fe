"use server";

import { cookies } from "next/headers";
import { TOKEN_NAME, cookiesOptions } from "./auth.const";
import { homeRoute } from "~/routes";
import { logger } from "~/utils/logger";

interface AuthResponse {
  token?: string | null;
  aes?: string | null;
  message?: string | null;
  redirectUrl?: string | null;
}

export async function signIn({
  username,
  password,
  register,
}: {
  username: string;
  password: string;
  register: boolean;
}): Promise<AuthResponse> {
  let response;
  try {
    if (!register) {
      response = await fetch(
        `${process.env.NEXT_PUBLIC_SOGNO_DI_ALE_SERVER}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        },
      );
    } else {
      response = await fetch(
        `${process.env.NEXT_PUBLIC_SOGNO_DI_ALE_SERVER}/api/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        },
      );
    }

    if (!response.ok) {
      throw new Error("Errore durante l'autenticazione");
    }

    const data: AuthResponse = (await response.json()) as AuthResponse;
    const token = data.token;

    logger.info(`Token ottenuto: ${token}`);
    if (token) {
      cookies().set(TOKEN_NAME, token, cookiesOptions);
    }
    return { ...data, message: "success", redirectUrl: homeRoute };
  } catch (err) {
    logger.error("Errore durante l'autenticazione");
    logger.error(err);
    return { message: "L'utente non è autorizzato" };
  }
}

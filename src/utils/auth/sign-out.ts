"use server";

import { cookies } from "next/headers";
import { RedirectType, redirect } from "next/navigation";
import { TOKEN_NAME, cookiesOptions } from "./auth.const";
import { authRoute } from "~/routes";
import { logger } from "~/utils/logger";

export async function signOut(): Promise<void> {
  logger.info("Disconnessione utente");
  await new Promise((resolve) => {
    cookies().set(TOKEN_NAME, "", cookiesOptions);
    resolve("success");
  });
  redirect(authRoute, RedirectType.replace);
}

"use server";

import { fetcher } from "~/lib/fetcher";
import type { Dashboard } from "~/types/dashboard";
import { logger } from "~/utils/logger";

export async function getDashboardNews() {
  logger.info("Chiamata dashboard/type/NEWS");
  return fetcher<Dashboard[]>(
    `${process.env.serviceUrl_sogno_di_ale_server}/api/dashboard/type/NEWS`,
  );
}

export async function getDashboardFaqs() {
  logger.info("Chiamata dashboard/type/FAQ");
  return fetcher<Dashboard[]>(
    `${process.env.serviceUrl_sogno_di_ale_server}/api/dashboard/type/FAQ`,
  );
}

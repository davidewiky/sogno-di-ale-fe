"use client";

import type { Dashboard } from "~/types/dashboard";
import { logger } from "~/utils/logger";
import {getRequest} from "~/lib/httpclient";

export async function getDashboardNews() {
  logger.info("Chiamata dashboard/type/NEWS");
  return getRequest<Dashboard[]>(`${process.env.NEXT_PUBLIC_SOGNO_DI_ALE_SERVER}/api/dashboard/type/NEWS`);
}

export async function getDashboardEvents() {
  logger.info("Chiamata dashboard/type/EVENTS");
  return getRequest<Dashboard[]>(`${process.env.NEXT_PUBLIC_SOGNO_DI_ALE_SERVER}/api/dashboard/type/EVENTS`);
}
export async function getDashboardFaqs() {
  logger.info("Chiamata dashboard/type/FAQ");
  return getRequest<Dashboard[]>(
    `${process.env.NEXT_PUBLIC_SOGNO_DI_ALE_SERVER}/api/dashboard/type/FAQ`,
  );
}

export async function getLatestDashboardEvents() {
  logger.info("Chiamata last dashboard/type/EVENTS");
  return getRequest<Dashboard[]>(
    `${process.env.NEXT_PUBLIC_SOGNO_DI_ALE_SERVER}/api/dashboard/type/EVENTS/latest`,
  );
}

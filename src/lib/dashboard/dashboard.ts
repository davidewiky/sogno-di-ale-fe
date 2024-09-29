"use client";

import type { DashboardEvents } from "~/types/dashboardEvents";
import { logger } from "~/utils/logger";
import { deleteRequest, getRequest } from "~/lib/httpclient";

export async function getDashboardNews() {
  logger.info("Chiamata dashboard/type/NEWS");
  return getRequest<DashboardEvents[]>(`${process.env.NEXT_PUBLIC_SOGNO_DI_ALE_SERVER}/api/dashboard/type/NEWS`);
}

export async function getDashboardEvents() {
  logger.info("Chiamata dashboard/type/EVENTS");
  return getRequest<DashboardEvents[]>(`${process.env.NEXT_PUBLIC_SOGNO_DI_ALE_SERVER}/api/dashboard/type/EVENTS`);
}
export async function getDashboardFaqs() {
  logger.info("Chiamata dashboard/type/FAQ");
  return getRequest<DashboardEvents[]>(
    `${process.env.NEXT_PUBLIC_SOGNO_DI_ALE_SERVER}/api/dashboard/type/FAQ`,
  );
}

export async function getLatestDashboardEvents() {
  logger.info("Chiamata last dashboard/type/EVENTS");
  return getRequest<DashboardEvents[]>(
    `${process.env.NEXT_PUBLIC_SOGNO_DI_ALE_SERVER}/api/dashboard/type/EVENTS/latest`,
  );
}

export async function deleteEvents(id: string) {
  logger.info(`Cancellazione evento: ${id}`);
  return deleteRequest<{text: string}>(
    `${process.env.NEXT_PUBLIC_SOGNO_DI_ALE_SERVER}/api/dashboard/${id}`,
  );
}

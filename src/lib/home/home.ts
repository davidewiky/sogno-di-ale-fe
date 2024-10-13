"use client";
import { logger } from "~/utils/logger";
import { getRequest } from "~/lib/httpclient";
import type { DashboardEvents } from "~/types/dashboard-events";

export async function getAllEvents() {
  logger.info("Chiamata per gli eventi");
  return getRequest<DashboardEvents[]>(
    `${process.env.NEXT_PUBLIC_SOGNO_DI_ALE_SERVER}/api/events`,
  );
}

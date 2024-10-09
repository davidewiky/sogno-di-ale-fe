"use client"

import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';
import { logger } from "~/utils/logger";

export async function getRequest<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
  try {
    const response: AxiosResponse<T> = await axios.get(url, config);
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
}

export async function postRequest<T>(url: string, data?: string, config?: AxiosRequestConfig): Promise<T> {
  try {
    const response: AxiosResponse<T> = await axios.post(url, data, config);
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
}

export async function deleteRequest<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
  try {
    const response: AxiosResponse<T> = await axios.delete(url, config);
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
}

function handleError(error: unknown): void {
  if (axios.isAxiosError(error)) {
    logger.error(`Errore nella richiesta Axios: ${error.message}`);
  } else {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions -- will be a string
    logger.error(`Errore generico: ${error}`);
  }
}

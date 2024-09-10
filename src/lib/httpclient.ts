"use client"

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
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

export async function postRequest<T>(url: string, data?: never, config?: AxiosRequestConfig): Promise<T> {
  try {
    const response: AxiosResponse<T> = await axios.post(url, data, config);
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
}

function handleError(error: any): void {
  if (axios.isAxiosError(error)) {
    logger.error(`Errore nella richiesta Axios: ${error.message}`);
  } else {
    logger.error(`Errore generico: ${error}`);
  }
}

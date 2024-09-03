"use server";

import { fetcher, fetcherBlob } from "~/lib/fetcher";
import type { UserDocumentSent } from "~/types/document";

export async function getPublishedDocument() {
  return fetcher<UserDocumentSent>(
    `${process.env.serviceUrl_sogno_di_ale_server}/api/document/sent`,
  );
}

export async function downloadDocuments(documentId: string) {
  const response = await fetcherBlob<Blob>(
    `${process.env.serviceUrl_sogno_di_ale_server}/api/document/download?documentId=${documentId}`,
  );
  return response.text();
}

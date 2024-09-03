import { http, HttpResponse } from "msw";
import { patientDocumentSentsMock } from "./handlers/patient-document-sents";

export const handlers = [
  http.get("*/api/document/sent", () => {
    return HttpResponse.json(patientDocumentSentsMock);
  }),
  http.post("*/api/auth/login", () => {
    return HttpResponse.json({ token: "tokenTest", aes: "aesKeyTest" });
  }),
  http.get("*/api/dashboard/home/news", () => {
    return HttpResponse.json([
      { title: "Title news1", content: "content news 1", orderView: 0 },
    ]);
  }),
  http.get("*/api/dashboard/home/faq", () => {
    return HttpResponse.json([
      { title: "Title Faq1", content: "content faq 1", orderView: 0 },
    ]);
  }),
];

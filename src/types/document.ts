export interface UserDocumentSent {
  patientDocumentSents: UserPatientDocumentSent[];
}

export interface Patient {
  neoc: number | null;
  name: string;
  surname: string | null;
  birthDate: string | null;
  deceaseDate: string | null;
  gender: string;
  address: string | null;
}

export interface UserPatientDocumentSent {
  patient: Patient;
  documentsCount: number;
  newDocumentsCount: number | null;
  baskets: Basket[] | null;
}

export interface Basket {
  id: string;
  message: string;
  sentTime: string;
  redisBasketDocumentList: BasketDocument[];
}

export interface BasketDocument {
  id: string;
  name: string;
  pathForDownload: string;
  newDoc: boolean;
}

export const patientDocumentSentsMock = {
  patientDocumentSents: [
    {
      patient: {
        neoc: 123456,
        name: "Luca",
        surname: "Verdi",
        birthDate: "04.04.1995",
        deceaseDate: null,
        address: "Via Lugano 4F",
        gender: "M",
      },
      documentsCount: 3,
      newDocumentsCount: 1,
      baskets: [
        {
          id: "01",
          message: "Inviato tramite EocNet",
          sentTime: "2024-06-06T13:00:00Z",
          redisBasketDocumentList: [
            { id: "001", name: "Test File 1", pathForDownload: "/path/1" },
          ],
        },
        {
          id: "02",
          message: "Test messaggio",
          sentTime: "2024-06-06T13:30:00Z",
          redisBasketDocumentList: [
            { id: "002", name: "Test File 2", pathForDownload: "/path/2" },
          ],
        },
      ],
    },
    {
      patient: {
        neoc: 654321,
        name: "Paola",
        surname: "Bianchi",
        birthDate: "10.01.1980",
        deceaseDate: null,
        address: "Via Lugano 5F",
        gender: "F",
      },
      documentsCount: 0,
      newDocumentsCount: 0,
      baskets: [],
    },
  ],
};

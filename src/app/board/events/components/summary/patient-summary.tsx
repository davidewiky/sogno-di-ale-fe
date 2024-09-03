import { Chip, Stack } from "@mui/material";
import React, { useContext } from "react";
import { PatientInfo } from "~/app/board/documents/components/summary/patient-info";
import { MoreActionsMenu } from "~/app/board/documents/components/summary/more-actions-menu";
import type { UserPatientDocumentSent } from "~/types/document";
import { DocumentsDownloadButton } from "~/app/board/documents/components/detail/documents-download-button";
import { UserInfoContext } from "~/components/utils/provider-context";

interface PatientSummaryProps {
  doc: UserPatientDocumentSent;
}

export function PatientSummary({ doc }: PatientSummaryProps) {
  const loggedUser = useContext(UserInfoContext);
  const documentsTot = doc.baskets
    ? doc.baskets.flatMap((basket) => {
        return basket.redisBasketDocumentList;
      })
    : [];
  const documentsNew =
    documentsTot.length > 0 ? documentsTot.filter((bd) => bd.newDoc) : [];
  return (
    <Stack alignItems="center" direction="row" flex={1}>
      <Stack flex={1}>
        <PatientInfo patient={doc.patient} />
      </Stack>
      {doc.newDocumentsCount && doc.newDocumentsCount > 0 && loggedUser ? (
        <>
          <Chip
            color="primary"
            label={doc.newDocumentsCount}
            size="small"
            sx={{ mr: 1 }}
          />
          <DocumentsDownloadButton
            basketDocuments={documentsNew}
            loggedUser={loggedUser}
          />
        </>
      ) : null}
      <MoreActionsMenu
        allBasketsDocuments={documentsTot}
        documentsCount={doc.documentsCount}
        newBasketsDocuments={documentsNew}
        newDocumentsCount={doc.newDocumentsCount ?? 0}
      />
    </Stack>
  );
}

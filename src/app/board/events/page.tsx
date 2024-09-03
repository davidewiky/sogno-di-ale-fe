"use client";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Box,
  Skeleton,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { getPublishedDocument } from "~/lib/documenti/document";
import { BasketsDetail } from "~/app/board/documents/components/detail/baskets-detail";
import { PatientSummary } from "~/app/board/documents/components/summary/patient-summary";
import { PreviewDocument } from "~/app/board/documents/components/preview/preview-document";
import type { BasketDocument } from "~/types/document";
import { Filters } from "~/app/board/documents/components/summary/filters";

export default function EventsPage() {
  const [selectedDocument, setSelectedDocument] =
    useState<BasketDocument | null>(null);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["publishedDocument"],
    queryFn: () => {
      return getPublishedDocument();
    },
  });

  if (isLoading) {
    return (
      <Stack gap={1}>
        <Skeleton height={50} variant="rounded" />
        <Skeleton height={80} variant="rounded" />
        <Skeleton height={80} variant="rounded" />
        <Skeleton height={80} variant="rounded" />
      </Stack>
    );
  }

  if (isError) {
    return <Alert severity="error">{error.message}</Alert>;
  }

  return (
    <>
      <Box width={selectedDocument ? "49%" : "100%"}>
        <Filters />
        <Box height="calc(100vh - 255px)" overflow="auto">
          {data?.patientDocumentSents.map((doc) => (
            <Accordion key={doc.patient.neoc} variant="outlined">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{ flexDirection: "row-reverse", gap: 2 }}
              >
                <PatientSummary doc={doc} />
              </AccordionSummary>
              {doc.baskets ? (
                <AccordionDetails>
                  <BasketsDetail
                    baskets={doc.baskets}
                    handleClickDocument={setSelectedDocument}
                    selectedDocument={selectedDocument}
                  />
                </AccordionDetails>
              ) : null}
            </Accordion>
          ))}
        </Box>
      </Box>
      {selectedDocument ? (
        <PreviewDocument
          onClose={() => {
            setSelectedDocument(null);
          }}
          selectedDocument={selectedDocument}
        />
      ) : null}
    </>
  );
}

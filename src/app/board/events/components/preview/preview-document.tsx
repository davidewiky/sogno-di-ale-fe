import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { Close } from "@mui/icons-material";
import type { BasketDocument } from "~/types/document";

interface PreviewDocumentProps {
  onClose: () => void;
  selectedDocument: BasketDocument;
}

//TODO: remove hardcoded iframe src
export function PreviewDocument({
  onClose,
  selectedDocument,
}: PreviewDocumentProps) {
  return (
    <Box
      borderLeft="solid 1px lightgray"
      bottom={0}
      boxShadow={(theme) => theme.shadows[3]}
      position="fixed"
      right={0}
      top={100}
      width="49%"
    >
      <Stack
        alignItems="center"
        borderBottom="solid 1px lightgray"
        direction="row"
        height={60}
        px={2}
      >
        <Typography color="primary" flex={1} fontWeight="bold">
          {selectedDocument.name}
        </Typography>
        <IconButton onClick={onClose}>
          <Close />
        </IconButton>
      </Stack>
      <Box height="100%">
        <iframe
          data-testid="preview-document"
          height="100%"
          src="https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf#toolbar=0"
          title={selectedDocument.name}
          width="100%"
        />
      </Box>
    </Box>
  );
}

import { Box, Stack, Typography } from "@mui/material";
import { format } from "date-fns";
import { itCH } from "date-fns/locale/it-CH";
import { useContext } from "react";
import type { Basket, BasketDocument } from "~/types/document";
import { DocumentList } from "~/app/board/documents/components/detail/document-list";
import { DocumentsDownloadButton } from "~/app/board/documents/components/detail/documents-download-button";
import { UserInfoContext } from "~/components/utils/provider-context";

interface BasketDetailsProps {
  baskets: Basket[];
  handleClickDocument: (doc: BasketDocument) => void;
  selectedDocument: BasketDocument | null;
}

//TODO:
// remove hard-coded sender OSG MEDICINA
export function BasketsDetail({
  baskets,
  handleClickDocument,
  selectedDocument,
}: Readonly<BasketDetailsProps>) {
  const loggedUser = useContext(UserInfoContext);
  return baskets.map((basket) => {
    const formattedDate = format(basket.sentTime, "eeee dd.MM.yyyy HH:mm", {
      locale: itCH,
    });
    return (
      <Box
        key={basket.id}
        sx={{
          backgroundColor: (theme) => theme.palette.primary.light,
          borderRadius: (theme) => theme.shape.borderRadius,
          mb: 2,
          pb: 1,
        }}
      >
        <Box paddingX={2} pt={2}>
          <Stack alignItems="center" direction="row">
            <Typography color="primary" flex={1} fontWeight="bold">
              OSG Medicina - {formattedDate}
            </Typography>
            {basket.redisBasketDocumentList.length > 0 && loggedUser ? (
              <DocumentsDownloadButton
                basketDocuments={basket.redisBasketDocumentList}
                loggedUser={loggedUser}
              />
            ) : null}
          </Stack>
          <p>{basket.message}</p>
        </Box>
        <DocumentList
          documents={basket.redisBasketDocumentList}
          handleClickDocument={handleClickDocument}
          selectedDocument={selectedDocument}
        />
      </Box>
    );
  });
}

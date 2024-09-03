import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { InsertDriveFile } from "@mui/icons-material";
import type { BasketDocument } from "~/types/document";

interface DocumentListProps {
  documents: BasketDocument[];
  handleClickDocument: (doc: BasketDocument) => void;
  selectedDocument: BasketDocument | null;
}

export function DocumentList({
  documents,
  handleClickDocument,
  selectedDocument,
}: Readonly<DocumentListProps>) {
  return (
    <List>
      {documents.map((document) => (
        <ListItem disableGutters disablePadding key={document.id}>
          <ListItemButton
            onClick={() => {
              handleClickDocument(document);
            }}
            selected={selectedDocument?.id === document.id}
            sx={{
              "&.Mui-selected": {
                color: (theme) => theme.palette.primary.main,
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
              <InsertDriveFile
                color={
                  selectedDocument?.id === document.id ? "primary" : "inherit"
                }
              />
            </ListItemIcon>
            <ListItemText
              primary={document.name}
              primaryTypographyProps={{ fontWeight: "bold" }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

import {
  Chip,
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { MoreVert, PersonOff } from "@mui/icons-material";
import React, { useContext } from "react";
import { DocumentsDownloadButton } from "~/app/board/documents/components/detail/documents-download-button";
import type { BasketDocument } from "~/types/document";
import { UserInfoContext } from "~/components/utils/provider-context";

interface MoreActionsMenuProps {
  documentsCount: number;
  newDocumentsCount: number;
  allBasketsDocuments: BasketDocument[];
  newBasketsDocuments: BasketDocument[];
}

export function MoreActionsMenu({
  documentsCount,
  newDocumentsCount,
  allBasketsDocuments,
  newBasketsDocuments,
}: MoreActionsMenuProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const loggedUser = useContext(UserInfoContext);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <MoreVert />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        onClose={handleClose}
        open={open}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {newDocumentsCount > 0 && (
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <DocumentsDownloadButton
                basketDocuments={newBasketsDocuments}
                loggedUser={loggedUser}
              />
            </ListItemIcon>
            <ListItemText>Scarica solo nuovi documenti</ListItemText>
            <Chip
              color="primary"
              label={newDocumentsCount}
              size="small"
              sx={{ ml: 2 }}
            />
          </MenuItem>
        )}
        {documentsCount > 0 && (
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <DocumentsDownloadButton
                basketDocuments={allBasketsDocuments}
                loggedUser={loggedUser}
              />
            </ListItemIcon>
            <ListItemText>Scarica tutti i documenti</ListItemText>
            <Chip
              color="primary"
              label={documentsCount}
              size="small"
              sx={{ ml: 2 }}
            />
          </MenuItem>
        )}
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonOff />
          </ListItemIcon>
          <ListItemText>Non è un mio paziente</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
}

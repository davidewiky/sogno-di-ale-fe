import { DashboardEvents } from "~/types/dashboard-events";
import { Box, Button, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";
import { enqueueSnackbar } from "notistack";
import { useQueryClient } from "@tanstack/react-query";
import {ImageContainer} from "~/app/board/utils/image-container";
import { deleteEvents } from "~/lib/dashboard/dashboard";

interface SingleEventsProps {
  dashboradEvents: DashboardEvents,
  width: string,
  height: string,
  onClickEdit?: (item: DashboardEvents) => void;
}
export function SingleEvents({ dashboradEvents, width, height, onClickEdit }: Readonly<SingleEventsProps>) {
  const queryClient = useQueryClient();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <Box sx={{ flex: 1, m: 1 }}>
          <Typography variant="h6">{dashboradEvents.title}</Typography>
          {dashboradEvents.attachment ?
            <ImageContainer width={width} height={height} image={dashboradEvents.attachment} />
            : null}

          <Typography variant="body2">
            <div dangerouslySetInnerHTML={{ __html: dashboradEvents.content }} />
          </Typography>
        </Box>
        {onClickEdit ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            <Button
              color="primary"
              onClick={() => {
                onClickEdit(dashboradEvents);
              }}
              startIcon={<EditIcon />}
              sx={{ marginRight: 1 }}
              variant="outlined"
            >
              Modifica
            </Button>
            <Button
              color="error"
              {/* eslint-disable-next-line @typescript-eslint/no-misused-promises -- permitted */}
              onClick={ async () => {
                if (dashboradEvents.id) {
                  const data = await deleteEvents(dashboradEvents.id);
                  await queryClient.invalidateQueries({
                    queryKey: [`event-list`],
                  });
                  enqueueSnackbar(data.text, {
                    variant: "success",
                  });
                }
              }}
              startIcon={<CancelIcon />}
              sx={{ marginRight: 1 }}
              variant="outlined"
            >
              Elimina
            </Button>
          </Box>
          )
          : null
        }
      </Box>
    </>
  );
}

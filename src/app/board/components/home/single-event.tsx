import {Dashboard} from "~/types/dashboard";
import {Typography} from "@mui/material";
import React from "react";
import {ImageContainer} from "~/app/board/utils/image-container";

interface SingleEventsProps {
  dashboradEvents: Dashboard,
  width: string,
  height: string,
}
export function SingleEvents({dashboradEvents, width, height}: Readonly<SingleEventsProps>) {
  return (
    <>
      <Typography variant="h6">{dashboradEvents.title}</Typography>
      {dashboradEvents.attachment ?
        <ImageContainer width={width} height={height} image={dashboradEvents.attachment} />
        : null}

      <Typography variant="body2">
        <div dangerouslySetInnerHTML={{ __html: dashboradEvents.content }} />
      </Typography>
    </>
  );
}

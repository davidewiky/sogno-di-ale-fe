"use client";

import { CardMedia, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import type { DashboardEvents } from "~/types/dashboard-events";

interface CardEventProps {
  event: DashboardEvents | null;
}
export function CardEvent({ event }: Readonly<CardEventProps>) {
  return (
    <Card>
      <CardMedia
        allow="autoplay; encrypted-media"
        allowFullScreen
        component="iframe"
        height="315"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ" // URL del video
      />
      <CardContent>
        <Typography variant="h6">Titolo del Video</Typography>
        <Typography color="textSecondary" variant="body2">
          {event?.content}
        </Typography>
      </CardContent>
    </Card>
  );
}

"use client";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid, Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {EventAccordionDetail} from "~/app/board/events/components/detail/event-card-detail";

export default function EventsPage() {
  /*const { data, isLoading, isError, error } = useQuery({
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
  } */

  return (
      <Box sx={{ flexGrow: 1, padding: "20px" }}>
        <Grid container spacing={2}>
          {/* Colonna con Accordion */}
          <Grid item xs={12} md={6}>
        <Accordion sx={{ width: "100%" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6">Accordion Title</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <EventAccordionDetail />
          </AccordionDetails>
        </Accordion>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ marginBottom: "20px" }}>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
  );
}

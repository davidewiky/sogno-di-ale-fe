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
  return (
      <Box sx={{ flexGrow: 1, padding: "20px" }}>
        <Grid container spacing={2}>
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

import {Box, Card, CardContent, Typography} from "@mui/material";
import React from "react";

export function EventAccordionDetail() {
  return (
  <Card sx={{ display: "flex", alignItems: "center" }}>
    <Box sx={{ width: "3cm", height: "3cm", overflow: "hidden", marginRight: "16px" }}>
      <img
        src="https://via.placeholder.com/150" // Inserisci il link dell'immagine qui
        alt="example"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </Box>
    <CardContent sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h6">Titolo</Typography>
      <Typography variant="body2" color="textSecondary">
        Questa è una breve didascalia descrittiva.
      </Typography>
      <Typography variant="caption" color="textSecondary" sx={{ marginTop: "8px" }}>
        10 Settembre 2024
      </Typography>
    </CardContent>
  </Card>);
}

"use client";

import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { HomeNews } from "./components/home/news";
import { Payments } from "./components/home/payments";
import { Info } from "~/app/board/components/home/info";

export default function DashboardPage() {
  return (
    <Box>
      <Typography variant="h5">Il sogno</Typography>
      <Typography variant="h3">di Ale Onlus</Typography>
      <Grid container justifyContent="space-between" spacing={1}>
        <Grid item md={5} xs={13}>
          <HomeNews />
        </Grid>
        <Grid item md={7} xs={13}>
          <Info />
          <Payments />
        </Grid>
      </Grid>
    </Box>
  );
}

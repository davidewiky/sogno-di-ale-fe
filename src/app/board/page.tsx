"use client";

import { Grid, Stack, Typography } from "@mui/material";
import backgroundImage from "../../../public/placeholder.jpg";
import { HomeNews } from "./components/home/news";
import { HomeEvents } from "./components/home/last-event";
import { HomeStats } from "./components/home/patients";
import { HomeAboutUs } from "./components/home/help";

export default function DashboardPage() {
  return (
    <>
      <Stack
        color="#fff"
        height={250}
        justifyContent="center"
        mb={5}
        mt={-5}
        mx={-10}
        px={10}
        sx={{
          backgroundImage: `url(${backgroundImage.src})`,
        }}
      >
        <Typography variant="h5">Il sogno</Typography>
        <Typography variant="h3">di Ale Onlus</Typography>
      </Stack>
      <Grid container justifyContent="space-between" spacing={1}>
        <Grid item md={8} xs={13}>
          <HomeNews />
        </Grid>
        <Grid item md={4} xs={13}>
          <HomeEvents />
          <HomeStats />
          <HomeAboutUs />
        </Grid>
      </Grid>
    </>
  );
}

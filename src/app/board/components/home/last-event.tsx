import {Alert, Skeleton, Stack, Typography} from "@mui/material";
import { SectionBox } from "~/app/board/components/home/section-box";
import Marquee from "react-fast-marquee";
import { useQuery } from "@tanstack/react-query";
import { getLatestDashboardEvents } from "~/lib/dashboard/dashboard";
import { SingleEvents } from "~/app/board/components/home/single-event";
import React from "react";
import {DashboardEvents} from "~/types/dashboard-events";

export function HomeEvents() {
  const { data, isLoading, isError} = useQuery({
    queryKey: ["latestEvents"],
    queryFn: () => {
        return getLatestDashboardEvents();
    },
    gcTime: 0,
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
    return (
      <Alert severity="error">Non è stato possibile recuperare gli eventi passati</Alert>
    );
  }

  return (
    <SectionBox>
      <Typography variant="h4">Ultimi eventi</Typography>
      <Marquee gradient>
        {data?.map((events: DashboardEvents, index: number) => (
            <SingleEvents key={index} dashboradEvents={events} width="5cm" height="5cm"/>
        ))}
      </Marquee>
    </SectionBox>
  );
}

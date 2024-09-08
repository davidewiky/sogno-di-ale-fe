"use client";

import { Alert, Skeleton, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import {getDashboardEvents, getDashboardNews} from "~/lib/dashboard/dashboard";
import {SingleEvents} from "~/app/board/components/home/single-event";

export function HomeNews() {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["news"],
    queryFn: async () => {
      const [dashboardNews, dashboardEvents] = await Promise.all([
        getDashboardNews(),
        getDashboardEvents(),
        ]);
      return [...dashboardNews, ...dashboardEvents];
    },
  });

  useEffect(() => {
    void refetch();
  }, [refetch]);

  if (isError) {
    return (
      <Alert severity="error">Non è stato possibile recuperare i prossimi incontri</Alert>
    );
  }

  return (
    <>
      <Typography variant="h3">Prossimi incontri</Typography>
      {isLoading ? (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      ) : null}
      {data?.map((news) => {
        return (
          <SingleEvents dashboradEvents={news} width="18cm" height="18cm"/>
        );
      })}
    </>
  );
}

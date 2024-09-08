"use client";

import { Alert, Skeleton, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import {getDashboardEvents, getDashboardNews} from "~/lib/dashboard/dashboard";

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
      <Alert severity="error">Non è stato possibile recuperare le news</Alert>
    );
  }

  return (
    <>
      <Typography variant="h3">Notizie e comunicazioni</Typography>
      {isLoading ? (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      ) : null}
      {data?.map((news) => {
        return (
          <>
            <Typography variant="h6">{news.title}</Typography>
            {news.attachment ? <div style={{ marginBottom: '10px' }}>
              <img src={`data:image/jpg;base64,${news.attachment}`} alt="file"/>
            </div> : null}

            <Typography variant="body2">
              <div dangerouslySetInnerHTML={{ __html: news.content }} />
            </Typography>
          </>
        );
      })}
    </>
  );
}

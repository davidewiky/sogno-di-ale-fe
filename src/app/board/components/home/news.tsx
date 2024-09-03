"use client";

import { Alert, Skeleton, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getDashboardNews } from "~/lib/dashboard/dashboard";

export function HomeNews() {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["news"],
    queryFn: () => {
      return getDashboardNews();
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
            <Typography variant="body2">
              <div dangerouslySetInnerHTML={{ __html: news.content }} />
            </Typography>
          </>
        );
      })}
    </>
  );
}

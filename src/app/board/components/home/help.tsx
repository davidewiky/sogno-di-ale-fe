"use client";

import { Alert, Skeleton, Typography } from "@mui/material";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getDashboardFaqs } from "~/lib/dashboard/dashboard";
import { SectionBox } from "~/app/board/components/home/section-box";

export function HomeAboutUs() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["faqs"],
    queryFn: () => {
      return getDashboardFaqs();
    },
  });

  if (isError) {
    return (
      <Alert severity="error">
        Non è stato possibile recuperare le recensioni
      </Alert>
    );
  }
  return (
    <SectionBox>
      <Typography variant="h4">Dicono di noi</Typography>
      {isLoading ? (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      ) : null}
      {data?.map((faq) => {
        return (
          <>
            <Typography variant="h6">{faq.title}</Typography>
            <Typography variant="body2">{faq.content}</Typography>
          </>
        );
      })}
    </SectionBox>
  );
}

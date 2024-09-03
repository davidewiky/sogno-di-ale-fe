"use client";
/* eslint-disable react/hook-use-state -- setter are not needed */
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDateFns } from "@mui/x-date-pickers-pro/AdapterDateFnsV3";
import { itCH } from "date-fns/locale/it-CH";
import { SnackbarProvider } from "notistack";

export function ClientProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [client] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={client}>
      <SnackbarProvider />
      <LocalizationProvider adapterLocale={itCH} dateAdapter={AdapterDateFns}>
        {children}
      </LocalizationProvider>
    </QueryClientProvider>
  );
}

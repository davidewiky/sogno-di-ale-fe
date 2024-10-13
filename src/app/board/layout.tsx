"use client";

import { Box } from "@mui/material";
import type { ReactNode } from "react";
import { Header } from "./components/header/header";

interface DashboardProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardProps) {
  return (
    <>
      <Header />
      <Box mt="100px" px={5} py={2}>
        {children}
      </Box>
    </>
  );
}

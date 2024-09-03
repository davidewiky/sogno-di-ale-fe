"use client";

import { Stack } from "@mui/material";
import React from "react";
import { Logo } from "~/components/logo";

export function HeaderLogo() {
  return (
    <Stack alignItems="end" direction="row" mr={5} py={1}>
      <Logo size={80} />
    </Stack>
  );
}

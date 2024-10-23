"use client";

import React, { useEffect, useState } from "react";
import "../../../../style.css";
import { Box } from "@mui/material";
import { Flower } from "~/app/board/components/home/flower";

export function HomeNews() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  return (
    <Box alignItems="center" display="flex">
      <Flower />
    </Box>
  );
}

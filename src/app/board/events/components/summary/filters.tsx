import {
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import React from "react";

export function Filters() {
  return (
    <Stack direction="row" gap={2} mb={2}>
      <TextField
        InputProps={{ startAdornment: <Search /> }}
        placeholder="Cerca..."
        sx={{ flex: 1 }}
      />
      <ToggleButtonGroup color="primary" exclusive value="all">
        <ToggleButton value="all">Mostra tutti</ToggleButton>
        <ToggleButton value="only-new">Mostra solo nuovi</ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
}

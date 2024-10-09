import { Box } from "@mui/material";

interface Created {
  value: string;
}

export function Placeholder({ value = "Scrivi..." }: Readonly<Created>) {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 10,
        color: "text.disabled",
        pointerEvents: "none",
      }}
    >
      {value}
    </Box>
  );
}

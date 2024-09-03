import { Box } from "@mui/material";
import { Logo } from "~/components/logo";

export function AuthHeader() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <Logo />
      <Box
        sx={{
          flex: 1,
          display: "flex",
          letterSpacing: "2px",
          fontWeight: "bold",
          fontSize: "32px",
          color: "rgb(0, 90, 156)",
          fontFamily: "Eurostile, Trebuchet MS,Arial,Helvetica,sans-serif",
        }}
      >
        <Box
          sx={{
            fontSize: "25px",
            color: "rgb(0, 118, 205)",
            lineHeight: "52px",
          }}
        >
          ACCEDI O
        </Box>
        <Box sx={{ marginLeft: 1 }}></Box>
        <Box
          sx={{
            fontSize: "25px",
            color: "rgb(0, 118, 205)",
            lineHeight: "52px",
          }}
        >
          REGISTRATI
        </Box>
      </Box>
    </Box>
  );
}

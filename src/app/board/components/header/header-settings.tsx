import { Box, Link, Typography } from "@mui/material";
import { href } from "../../utils/functions";

export function HeaderSettings() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "-10px",
        right: 0,
        display: "flex",
        gap: "40px",
        padding: "18px 36px 8px 50px",
        backgroundColor: "#1194d2",
        borderBottomLeftRadius: "50px",
      }}
    >
      <Link color="#fff" href={href("/contatti")} underline="none">
        <Typography variant="body2">Contatti</Typography>
      </Link>
      <Link color="#fff" href={href("/impostazioni")} underline="none">
        <Typography variant="body2">Impostazioni</Typography>
      </Link>
      <Link color="#fff" href={href("/aiuto")} underline="none">
        <Typography variant="body2">Aiuto</Typography>
      </Link>
    </Box>
  );
}

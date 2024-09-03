import { Box } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { AuthForm } from "./auth-form";
import { AuthHeader } from "./auth-header";
import { signIn } from "~/utils/auth/sign-in";

export default function AuthPage() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: lightBlue[50],
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card sx={{ minWidth: 400 }}>
        <CardContent
          sx={{ display: "flex", flexDirection: "column", gap: 3, padding: 4 }}
        >
          <AuthHeader />
          <AuthForm handleSubmit={signIn} />
        </CardContent>
      </Card>
    </Box>
  );
}

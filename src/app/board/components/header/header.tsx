import { AppBar, Box, Toolbar } from "@mui/material";
import { useContext } from "react";
import { HeaderPageLinks } from "./header-page-links";
import { HeaderSettings } from "./header-settings";
import { HeaderLogo } from "./header-logo";
import { HeaderPageWidget } from "./header-page-widget";
import { UserInfoContext } from "~/components/utils/provider-context";

export function Header() {
  const loggedUser = useContext(UserInfoContext);
  return (
    <AppBar
      color="transparent"
      data-testid="board-header"
      position="fixed"
      sx={{ bgcolor: "#fff", height: 100 }}
    >
      <Toolbar sx={{ height: "100%" }}>
        <HeaderLogo />
        <Box alignSelf="end" flex={1}>
          <HeaderPageLinks />
        </Box>
        <Box alignSelf="end" mb={1}>
          <HeaderPageWidget isLogged={loggedUser?.user?.isAuth} />
        </Box>
        <HeaderSettings />
      </Toolbar>
    </AppBar>
  );
}

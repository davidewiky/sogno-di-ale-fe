import MuiXLicense from "~/components/mui/mui-x-license";
import ThemeRegistry from "~/components/mui/theme-registry/theme-registry";

export function ServerProviders({ children }: React.PropsWithChildren) {
  return (
    <ThemeRegistry>
      {children}
      <MuiXLicense />
    </ThemeRegistry>
  );
}

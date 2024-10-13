"use client";

import { usePathname, useRouter } from "next/navigation";
import { Box, Button } from "@mui/material";
import { SignOutButton } from "~/components/sign-out-button";
import { homeRoute } from "~/routes";
import { signOut } from "~/utils/auth/sign-out";

const routeAuth = { label: "Accedi", path: "/auth" };
const routeConfig = { label: "Configura", path: "/admin/news/" };

const getLastFragment = (pathname: string) => {
  return pathname.substring(homeRoute.length).replaceAll("/", "");
};

export function HeaderPageWidget({ isLogged }: { isLogged: boolean }) {
  const pathname = usePathname();
  const location = getLastFragment(pathname);
  const router = useRouter();
  if (location === "" && !isLogged) {
    return <SignOutButton signOut={signOut} />;
  }
  return (
    <Box>
      <Button
        onClick={() => {
          router.replace(routeConfig.path);
        }}
      >
        Configurazione
      </Button>
      <Button
        onClick={() => {
          router.replace(routeAuth.path);
        }}
      >
        Accedi
      </Button>
    </Box>
  );
}

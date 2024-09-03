"use client";

import {usePathname, useRouter} from "next/navigation";
import { SignOutButton } from "~/components/sign-out-button";
import { homeRoute } from "~/routes";
import { signOut } from "~/utils/auth/sign-out";
import {Button} from "@mui/material";

const route =
  { label: "Accedi", path: "/auth" };

const getLastFragment = (pathname: string) => {
  return pathname.substring(homeRoute.length).replaceAll("/", "");
};

export function HeaderPageWidget({ isLogged }: { isLogged: boolean }) {
  const pathname = usePathname();
  const location = getLastFragment(pathname);
  const router = useRouter();
  if (location === "" && !isLogged) {
    return <SignOutButton signOut={signOut} />;
  } else {
    return <Button onClick={() => {
      router.replace(route.path);
    }}> Accedi </Button>
  }
  return null;
}

"use client";

import { Tabs, Tab } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import nextConfigBase from "../../../../../next.config.mjs";
import { href } from "../../utils/functions";

const routes = [
  { label: "Home", path: "/board" },
  { label: "Eventi", path: "/board/events" },
  { label: "Cosa facciamo", path: "/board/works" },
  { label: "La nostra storia", path: "/board/history" },
];

const getSelectedPageIndex = (pathname: string): number => {
  const completePath = `${nextConfigBase.basePath}${pathname}`;
  return routes.findIndex((route) => href(route.path) === completePath);
};

export function HeaderPageLinks() {
  const pathname = usePathname();
  const tabIndex = getSelectedPageIndex(pathname);
  const tabsValue = tabIndex === -1 ? false : tabIndex;
  const router = useRouter();
  return (
    <Tabs role="navigation" value={tabsValue}>
      {routes.map((route) => (
        <Tab
          key={route.label}
          label={route.label}
          onClick={() => {
            router.replace(route.path);
          }}
          sx={{ textTransform: "none" }}
        />
      ))}
    </Tabs>
  );
}

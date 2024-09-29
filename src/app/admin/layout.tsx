"use client";

import { Box, Tab, Tabs } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  {
    href: "/admin/news",
    label: "Gestione Notizie",
    type: "news",
  },
  {
    href: "/admin/events",
    label: "Gestione Eventi",
    type: "events",
  }
];

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const index = tabs.findIndex((tab) => pathname.startsWith(tab.href));
  const value = index >= 0 ? index : false;
  return (
    <>
      <div>Layout di edit da mettere in un routeguard </div>
      <Box sx={{ padding: "20px 32px" }}>
        <Box>
          <Tabs value={value}>
            {tabs.map((tab) => (
              <Tab
                component={Link}
                href={tab.href}
                key={tab.type}
                label={tab.label}
              />
            ))}
          </Tabs>
        </Box>
        <Box>{children}</Box>
      </Box>
    </>
  );
}

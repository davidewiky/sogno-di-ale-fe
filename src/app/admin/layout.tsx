"use client";

import { Box, Button, Tab, Tabs } from "@mui/material";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import ReplyIcon from "@mui/icons-material/Reply";

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
  },
];

const routeHome = { label: "Home", path: "/board" };
export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const index = tabs.findIndex((tab) => pathname.startsWith(tab.href));
  const value = index >= 0 ? index : false;
  const router = useRouter();
  return (
    <>
      <Button
        onClick={() => {
          router.replace(routeHome.path);
        }}
        startIcon={<ReplyIcon />}
        sx={{ marginTop: 1 }}
        variant="outlined"
      >
        Home
      </Button>
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

import "../style.css";
import type { Metadata } from "next";
import { ServerProviders } from "~/components/utils/provider-server";
import {
  ClientProviderWrapper,
  UserInfoContextProvider,
} from "~/components/utils/providers";

export const metadata: Metadata = {
  title: "Sogno di Ale",
  description: "Sogno di Ale",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="#" rel="shortcut icon" title="to rmv error log favicon" />
      </head>
      <body>
        <ServerProviders>
          <ClientProviderWrapper>
            <UserInfoContextProvider>{children}</UserInfoContextProvider>
          </ClientProviderWrapper>
        </ServerProviders>
      </body>
    </html>
  );
}

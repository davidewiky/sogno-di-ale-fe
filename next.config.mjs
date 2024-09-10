/** @type {import('next').NextConfig} */
const nextConfigBase = {
  basePath: "/sogno-di-ale",
  trailingSlash: true,
  redirects: () => [
    {
      source: "/",
      destination: "/board",
      permanent: true,
    },
    {
      source: "/sogno-di-ale-server/:path*",
      destination: process.env.NEXT_PUBLIC_SOGNO_DI_ALE_SERVER + "/:path*",
      basePath: false,
      permanent: true,
    },
  ],
};

export default nextConfigBase;

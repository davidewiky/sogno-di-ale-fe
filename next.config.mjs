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
      destination: process.env.serviceUrl_sogno_di_ale_server + "/:path*",
      basePath: false,
      permanent: true,
    },
  ],
};

export default nextConfigBase;

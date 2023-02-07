/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    // These are all the locales you want to support in
    locales: ["en-US", "de-DE"],
    defaultLocale: "en-US",
    domains: [
      {
        domain: "example.com",
        defaultLocale: "en-US",
      },
      {
        domain: "example.fr",
        defaultLocale: "de-DE",
        http: true,
      },
    ],
  },
  images: {
    domains: ["api.lorem.space"],
  },
};

module.exports = nextConfig;

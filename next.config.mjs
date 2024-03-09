/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SHEET_API_KEY: process.env.SHEET_API_KEY,
    API_URL: process.env.API_URL,
    SHEET_ID: process.env.SHEET_ID,
    SHEET_NAME: process.env.SHEET_NAME,
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    WALLET_CONNECTOR_PROJECT_ID: process.env.WALLET_CONNECTOR_PROJECT_ID,
  },
};

module.exports = nextConfig;

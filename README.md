<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/coinbase/onchainkit/main/site/docs/public/logo/v0-27.png">
    <img alt="OnchainKit logo vibes" src="https://raw.githubusercontent.com/coinbase/onchainkit/main/site/docs/public/logo/v0-27.png" width="auto">
  </picture>
</p>

# Onchain App Template

An Onchain App Template built with [OnchainKit](https://onchainkit.xyz), ready for deployment on Vercel.

Demo: https://onchain-app-template.vercel.app

## Quick Start

### Deploy to Vercel

Deploy directly to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fcoinbase%2Fonchain-app-template%23)

**Note:** Configure environment variables in Vercel project settings after deployment.

## Manual Setup

### Environment Variables

Configure a `.env` file with the following variables (reference `.env.local.example`):

```sh
# Obtain from https://portal.cdp.coinbase.com/products/onchainkit
NEXT_PUBLIC_CDP_API_KEY="GET_FROM_COINBASE_DEVELOPER_PLATFORM"

# Obtain from https://cloud.walletconnect.com
NEXT_PUBLIC_WC_PROJECT_ID="GET_FROM_WALLET_CONNECT"
```

You can obtain the API key from the [Coinbase Developer Portal's OnchainKit page](https://portal.cdp.coinbase.com/products/onchainkit). If you don't have an account, you will need to create one.

For the Wallet Connector project ID, visit [Wallet Connect](https://cloud.walletconnect.com) and create/access your project.

### Local Development

```sh
# Install bun
curl -fsSL https://bun.sh/install | bash

# Install dependencies
bun i

# Start development server
bun run dev
```

## Resources

- [OnchainKit Cursor Rules](https://cursor.directory/onchainkit)
- [OnchainKit llms.txt](https://docs.base.org/builderkits/onchainkit/llms.txt)
- [OnchainKit Documentation](https://onchainkit.xyz)
- [OnchainKit Early Adopter Contract](https://github.com/neodaoist/onchainkit-early-adopter) by neodaoist [[X]](https://x.com/neodaoist)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For assistance, please contact us through:
- [Discord](https://discord.gg/8gW3h6w5)
- [GitHub Issues](https://github.com/coinbase/onchainkit/issues)
- X: [@onchainkit](https://x.com/onchainkit), [@zizzamia](https://x.com/zizzamia), [@fkpxls](https://x.com/fkpxls)
